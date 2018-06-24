import { NgModule } from "@angular/core";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireStorageModule } from "angularfire2/storage";

@NgModule({
  imports: [
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAN78KNrN3JcL-tw1h1mP_sENvntgdR19Q",
      authDomain: "angularfire-ba26f.firebaseapp.com",
      databaseURL: "https://angularfire-ba26f.firebaseio.com",
      projectId: "angularfire-ba26f",
      storageBucket: "angularfire-ba26f.appspot.com",
      messagingSenderId: "405184758908"
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ]
})
export class FirebaseModule {}