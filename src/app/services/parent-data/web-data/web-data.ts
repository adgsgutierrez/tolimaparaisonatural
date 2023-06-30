import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  docData,
} from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';
import { Observable, map } from 'rxjs';
import { UtilsString } from 'src/app/utils/utils.string';

@Injectable({
  providedIn: 'root',
})
export class WebDataService {
  firestore: Firestore = inject(Firestore);

  private reference: any = {
    banner: 'information/banner',
    subBanner: 'information/subBanner',
    cardsInformation: 'cardsInformation',
    idDetail: 'idDetail',
  };

  /**
   * Esta es una función constructora en TypeScript con un cuerpo vacío.
   */
  constructor() {}
  /**
   * Esta función recupera todos los elementos de una colección específica en Firestore y los devuelve
   * como una matriz observable.
   * @param {string} table - una cadena que representa el nombre de la colección en Firestore de la que
   * el método recuperará datos.
   * @returns El método `getAll` devuelve un Observable de una matriz de tipo `T`. La matriz contiene los
   * datos recuperados de la colección de Firestore especificada por el parámetro `table`. Los datos se
   * transforman utilizando el operador `mapa` para garantizar que siempre se devuelvan como una matriz,
   * incluso si solo se recupera un único objeto.
   */
  getAll<T>(table: string): Observable<T[]> {
    let collectionName = this.reference[table];
    const itemCollection: any = doc(this.firestore, collectionName);
    return docData(itemCollection).pipe(
      map((res: any) => {
        if (!Array.isArray(res)) {
          return [res];
        }
        return res;
      })
    );
  }

  /**
   * Esta función recupera una lista de elementos de una colección de Firestore y la devuelve como un
   * Observable.
   * @param {string} table - una cadena que representa el nombre de la colección en Firestore de la que
   * la función recuperará datos.
   * @returns Se devuelve un Observable de una matriz de tipo T.
   */
  getList<T>(table: string): Observable<T[]> {
    let collectionName = this.reference[table];
    const itemCollection: any = collection(this.firestore, collectionName);
    return collectionData(itemCollection).pipe(
      map((res: any) => {
        if(res instanceof Array){
          let newRes: T[] = [];
          res.forEach ( item => {
            newRes.push( UtilsString.getDefaults<T>(item , table) );
          });
          return newRes;
        }
        return  UtilsString.getDefaults<T>(res , table);
      })
    );
  }

}
