import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.min(6)]),
    });
  }

  getEmailErrorMessage() {
    return this.loginForm.get('email').hasError('required') ? 'Entrez un email' :
      this.loginForm.get('email').hasError('email') ? 'Email invalide' :
        '';
  }

  getPasswordErrorMessage() {
    return this.loginForm.get('password').hasError('required') ? 'Entrez un mot de passe' :
      this.loginForm.get('password').hasError('email') ? 'Mot de passe trop court' :
        '';
  }

}
