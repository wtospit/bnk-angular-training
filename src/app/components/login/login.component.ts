import { PasswordValidator } from './../../validators/password.policy.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      pwd: ['', [ Validators.required, PasswordValidator.validate] ]
    });
  }

  doLogin() {
    console.log(this.loginForm.invalid);
    console.log(this.loginForm.get("pwd").errors);
    console.log(this.loginForm.value);
    return false;
  }
}
