import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { dbConfig } from 'src/environments/database.config';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCAS_9BoeZ3SVKvwsEPR-gmSDsdxb2AvvI",
      authDomain: "tolimaparaisonatural.firebaseapp.com",
      projectId: "tolimaparaisonatural",
      storageBucket: "tolimaparaisonatural.appspot.com",
      messagingSenderId: "102747215922",
      appId: "1:102747215922:web:408a3ca120086b8a18842b"
    })),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
