import { Component, OnInit, ViewChild, OnDestroy, ElementRef } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subscription } from 'rxjs';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  @ViewChild('emailInput') email: ElementRef;
  @ViewChild('passwordInput') password: ElementRef;
  authSubscribtion: Subscription

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
    // Subscribe to auth state if user login or logout
    this.authSubscribtion = this.afAuth.authState.subscribe(user => {
      console.log(user)
    })
  }

  login() {
    // Sign in with email and password
    const email = this.email.nativeElement.value
    const password = this.password.nativeElement.value
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }

  register() {
    // Create user with email and password
    const email = this.email.nativeElement.value
    const password = this.password.nativeElement.value
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  logout() {
    // Logout user
    this.afAuth.auth.signOut();
  }

  ngOnDestroy() {
    // Unsubscribe when destroyed
    this.authSubscribtion.unsubscribe()
  }

}
