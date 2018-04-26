import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }

  // TODO reimplement those methods
  getEmailErrorMessage() {
    return this.loginForm.get('email').hasError('required') ? 'Entrez un email' :
      this.loginForm.get('email').hasError('email') ? 'Email invalide' : '';
  }

  getPasswordErrorMessage() {
    return this.loginForm.get('password').hasError('required') ? 'Entrez un mot de passe' :
      this.loginForm.get('password').hasError('minlength') ? 'Mot de passe trop court' : '';
  }

  onSubmit() {
    this.authService.login(this.loginForm.get('email').value, this.loginForm.get('password').value)
      .subscribe(
        () => this.router.navigate([this.returnUrl]),
        e => console.log(e)
      );
  }
}
