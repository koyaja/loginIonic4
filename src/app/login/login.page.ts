import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private form: FormBuilder, private route: Router) {

    this.loginForm = form.group({
      username: ['',],
      password: ['']
    });
  }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.value.username == 'test' && this.loginForm.value.password == '1234') {
      this.route.navigate(['/home']);
    }
  }

}
