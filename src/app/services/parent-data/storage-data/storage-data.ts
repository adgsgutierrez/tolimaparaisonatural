import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageDataService {

  constructor(private dbService: NgxIndexedDBService) {}

  getById<T>(id: string, filter: string, table: string): Observable<T[]> {
    console.log('Storage ', table);
    console.log('Indice ', id);
    console.log('rangeKey ', IDBKeyRange.only(filter));
    return this.dbService.getAllByIndex(table, id , IDBKeyRange.only(filter));
  }

  getAll<T>(table: string): Observable<T[]> {
    return this.dbService.getAll(table);
  }

  setData(table: string, object: any): Observable<any> {
    return this.dbService.add(table , object);
  }

  setDataList(table: string, object: any[]): Observable<any> {
    let objectToSave: any[] = [];
    // object.forEach( item => {
    //   objectToSave.push( this.getnewObject(item) );
    // });
    console.log('Items a transformados para guardar ', objectToSave);
    return this.dbService.bulkAdd(table , object);
  }

  private getnewObject( item: any) : any {
    const keys = Object.keys(item);
    let objectNew: any = {};
    keys.forEach( key => {
      let value = typeof item[key] === "object" ? JSON.stringify(item[key]) : item[key];
      objectNew[key] = value;
    });
    return objectNew;
  }

  clear(table: string): Observable<any>{
    return this.dbService.clear(table);
  }
}
