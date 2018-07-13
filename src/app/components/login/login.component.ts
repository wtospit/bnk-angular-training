import { PasswordValidator } from './../../validators/password.policy.validators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, PasswordValidator.validate]]
    });
  }

  doLogin() {
    console.log(this.loginForm.invalid);
    console.log(this.loginForm.get("password").errors);
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe(
      data => {
        this.auth.setToken(data.token);
        this.router.navigate(['/admin']);
      },
      error => console.log(error)
    );
    return false;
  }
}
