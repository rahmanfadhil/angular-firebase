import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { FirebaseModule } from './firebase.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FirebaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
