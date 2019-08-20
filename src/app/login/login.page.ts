import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private form: FormBuilder) {

    this.loginForm = form.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
  }

}
