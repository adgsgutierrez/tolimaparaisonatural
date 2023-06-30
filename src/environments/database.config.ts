import { DBConfig } from "ngx-indexed-db";

const table_banner = {
  store: 'banner',
  storeConfig: { keyPath: 'version', autoIncrement: true },
  storeSchema: [
    { name: 'imgBanner', keypath: 'imgBanner', options: { unique: false } },
    { name: 'textBanner', keypath: 'textBanner', options: { unique: false } },
    { name: 'version', keypath: 'version', options: { unique: false } },
  ]
};

const table_subbaner = {
  store: 'subBanner',
  storeConfig: { keyPath: 'version', autoIncrement: true },
  storeSchema: [
    { name: 'title', keypath: 'title', options: { unique: false } },
    { name: 'content', keypath: 'content', options: { unique: false } },
    { name: 'version', keypath: 'version', options: { unique: false } },
  ]
};

const table_cardinformation = {
  store: 'cardsInformation',
  storeConfig: { keyPath: 'id', autoIncrement: true },
  storeSchema: [
    { name: 'id', keypath: 'id', options: { unique: false } },
    { name: 'description', keypath: 'description', options: { unique: false } },
    { name: 'image', keypath: 'image', options: { unique: false } },
    { name: 'title', keypath: 'title', options: { unique: false } },
    { name: 'route', keypath: 'route', options: { unique: false } },
  ]
};

const table_iddetail = {
  store: 'idDetail',
  storeConfig: { keyPath: 'id', autoIncrement: true },
  storeSchema: [
    { name: 'description', keypath: 'description', options: { unique: false } },
    { name: 'images', keypath: 'image', options: { unique: false } },
    { name: 'title', keypath: 'title', options: { unique: false } },
    { name: 'details', keypath: 'details', options: { unique: false } },
    { name: 'card', keypath: 'card', options: { unique: false } },
  ]
};

export const dbConfig: DBConfig  = {
  name: 'db_tolima_paraiso',
  version: 1,
  objectStoresMeta: [table_banner, table_subbaner, table_cardinformation , table_iddetail]
};