import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  headerText = "Профиль";

  isLogin = true;
  isRegistration = false;

  loginForm: FormGroup;
  registrationForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });

    this.registrationForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'repeatedPassword': new FormControl(null, Validators.required)
    });
  }

  onLoginClick() {
    if (!this.isLogin) {
      this.isLogin = !this.isLogin;
      this.isRegistration = !this.isRegistration;
    }
  }

  onRegistrationClick() {
    if (!this.isRegistration) {
      this.isRegistration = !this.isRegistration;
      this.isLogin = !this.isLogin;
    }
  }
}
