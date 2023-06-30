import { Injectable } from '@angular/core';
import { Observable, concatMap, map, of, zip } from 'rxjs';
import { WebDataService } from './web-data/web-data';
import { StorageDataService } from './storage-data/storage-data';
import { UtilsString } from 'src/app/utils/utils.string';
import { IBanner, ICard, IDetailSite, ISubBanner } from 'src/app/models/information/m.information';

@Injectable({
  providedIn: 'root',
})
export class ParentDataService {

  public static TABLE_BANNER = 'banner';
  public static TABLE_SUBBANNER = 'subBanner';
  public static TABLE_CARDS = 'cardsInformation';
  public static TABLE_DETAIL = 'idDetail';

/**
 * Esta es una función constructora que toma dos parámetros, un WebDataService y un StorageDataService,
 * y los asigna a propiedades privadas de la clase.
 * @param {WebDataService} web - WebDataService es un servicio que proporciona métodos para realizar
 * solicitudes HTTP a un servidor web y manejar las respuestas. Se utiliza para comunicarse con una API
 * o servidor back-end.
 * @param {StorageDataService} storage - El parámetro `storage` es una instancia de un servicio llamado
 * `StorageDataService`. Es probable que este servicio sea responsable de manejar el almacenamiento y
 * la recuperación de datos dentro de la aplicación, como almacenar las preferencias del usuario o
 * almacenar datos en caché para un acceso más rápido. La función `constructor` está usando inyección
 * de dependencia para inyectar una instancia de este servicio en
 */
  constructor(private web:WebDataService , private storage: StorageDataService) {}

/**
 * Esta función recupera datos del almacenamiento por ID y nombre de tabla y devuelve un observable de
 * una matriz de tipo T.
 * @param {string} id - El parámetro id es una cadena que representa el identificador único del
 * elemento que queremos recuperar del almacenamiento.
 * @param {string} table - El parámetro `table` es una cadena que representa el nombre de la tabla de
 * la que se deben obtener los datos. Se usa junto con el parámetro `id` para recuperar un registro
 * específico de la tabla.
 * @returns Un observable de una matriz vacía de tipo T.
 */
  getById<T>(idField: string, valueField: any, table: string): Observable<T[]> {
    return this.storage.getById(idField, valueField, table);
  }

/**
 * Esta función devuelve un Observable de una matriz de tipo T, que contiene todos los datos de una
 * tabla específica.
 * @param {string} table - El parámetro `table` es una cadena que representa el nombre de la tabla de
 * la que se deben recuperar los datos. Este método devuelve un Observable que emite una matriz de
 * objetos de tipo `T`.
 * @returns El método `getAll` devuelve un Observable de una matriz de tipo `T`. El método recupera
 * todos los datos de la tabla de almacenamiento especificada por el parámetro `table` y los devuelve
 * como un Observable.
 */
  getAll<T>(table: string): Observable<T[]> {
    return this.storage.getAll(table);
  }

/**
 * Esta función sincroniza datos locales y en la nube consultando la base de datos local con las
 * últimas versiones conocidas.
 * @returns Se devuelve un Observable de tipo `cualquiera`.
 */
  public sincronize(): Observable<any>{
    let lastVersionLocal = '0.0';
    let lastVersionCloud = '0.0';
    return this.localQuery(lastVersionLocal, lastVersionCloud);
  }

/**
 * La función recupera datos del almacenamiento local y devuelve un observable que mapea la respuesta y
 * llama a otra función con los datos recuperados.
 * @param {string} lastVersionLocal - una cadena que representa la última versión de los datos
 * almacenados localmente.
 * @param {string} lastVersionCloud - Parece que el parámetro `lastVersionCloud` no se usa en la
 * función `localQuery`. Es posible que esté destinado a ser utilizado en la función `webQuery` que se
 * llama dentro del operador `map`. Sin ver la implementación de la función `webQuery`
 * @returns un observable de tipo `Observable<IBanner[]>`.
 */
  private localQuery(lastVersionLocal: string, lastVersionCloud: string){
    return this.storage.getAll<IBanner>(ParentDataService.TABLE_BANNER)
    .pipe(
      concatMap((response: IBanner[]) => {
        response.forEach( banner => {
          lastVersionLocal = UtilsString.newVersion( lastVersionLocal , banner.version ) ? banner.version : lastVersionLocal;
        });
        return this.webQuery(lastVersionLocal, lastVersionCloud);
      })
    );
  }

 /**
  * La función consulta un servicio web para obtener información sobre el banner y verifica si hay una
  * nueva versión disponible.
  * @param {string} lastVersionLocal - Una cadena que representa la última versión de los datos
  * almacenados localmente.
  * @param {string} lastVersionCloud - La última versión de los datos almacenados en la nube.
  * @returns un observable de tipo `Observable<IBanner[]>`.
  */
  private webQuery(lastVersionLocal: string, lastVersionCloud: string){

    return this.web.getAll<IBanner>(ParentDataService.TABLE_BANNER)
    .pipe(
      concatMap( (responseCloud: IBanner[]) =>{
        responseCloud.forEach( bannerC => {
          lastVersionCloud = UtilsString.newVersion( lastVersionCloud , bannerC.version ) ? bannerC.version : lastVersionCloud;
        });
        if(UtilsString.newVersion( lastVersionLocal , lastVersionCloud )){
          return this.loadInformation();
        }
        return of(false);
      } )
    );
  }

  /**
   * La función carga datos de banner y subbanner desde un servicio web y los guarda en una base de
   * datos.
   * @returns Se devuelve un Observable<booleano>.
   */
  private loadInformation(): Observable<any>{
    return zip(
      this.web.getAll<IBanner>(ParentDataService.TABLE_BANNER),
      this.web.getAll<ISubBanner>(ParentDataService.TABLE_SUBBANNER),
      this.web.getList<ICard>(ParentDataService.TABLE_CARDS),
      this.web.getList<IDetailSite>(ParentDataService.TABLE_DETAIL)
    ).pipe(
      concatMap( (items: any) => {
        return this.clearInformation(items);
      })
    );
  }

  private clearInformation(items: any): Observable<any>{
    return zip(
      this.storage.clear(ParentDataService.TABLE_BANNER ),
      this.storage.clear(ParentDataService.TABLE_SUBBANNER ),
      this.storage.clear(ParentDataService.TABLE_CARDS ),
      this.storage.clear(ParentDataService.TABLE_DETAIL )
    ).pipe(
      concatMap( _i => {
        return this.loadAllInformation(items);
      })
    );
  }
/**
 * Esta función carga toda la información guardando datos para las tablas de banners y subbanners
 * usando zip y devuelve un observable.
 * @param {any} items - El parámetro "elementos" es del tipo "cualquiera", lo que significa que puede
 * ser cualquier tipo de datos. Sin embargo, según el nombre de la función y el uso del parámetro
 * dentro de la función, es probable que "elementos" sea un objeto que contenga información para
 * guardar en una base de datos. Es probable que el objeto tenga
 * @returns un observable que emite una matriz de respuestas al guardar datos en dos tablas diferentes
 * (ParentDataService.TABLE_BANNER y ParentDataService.TABLE_SUBBANNER). El observable se crea usando
 * el operador zip para combinar los resultados de dos llamadas saveData. El operador de mapa se
 * utiliza para registrar la respuesta en la consola.
 */
private loadAllInformation(items: any){
  return zip(
    this.saveData(ParentDataService.TABLE_BANNER , items[0][0]),
    this.saveData(ParentDataService.TABLE_SUBBANNER , items[1][0]),
    this.saveArrayData(ParentDataService.TABLE_CARDS , items[2]),
    this.saveArrayData(ParentDataService.TABLE_DETAIL , items[3]),
  )
  .pipe(
    map( response => {
      console.log('Response save ', response);
      return true;
    })
  )
}

/**
 * Esta función guarda datos en el almacenamiento utilizando un nombre y un objeto determinados.
 * @param {string} name - Una cadena que representa el nombre de los datos que se guardarán en el
 * almacenamiento.
 * @param {any} object - El parámetro de objeto es del tipo "cualquiera", lo que significa que puede
 * ser cualquier tipo de dato (cadena, número, booleano, objeto, etc.). Son los datos que deben
 * guardarse en el almacenamiento con el nombre dado.
 * @returns Se devuelve un Observable de tipo `cualquiera`.
 */
  private saveData( name: string , object: any ):Observable<any>{
    return this.storage.setData(name , object);
  }

  private saveArrayData(name: string , object: any[]):Observable<any>{
    console.log('Items a guardar ', object);
    return this.storage.setDataList(name , object);
  }
}
