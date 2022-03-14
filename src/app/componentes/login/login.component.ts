import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginComponent:any;
  reactiveForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.reactiveForm = this.builder.group({
      name: [null, Validators.required]
    });
    }
    register= {
      name : '',
      email : '',
      password : ''
    }
    onRegister() {
      console.log(this.register);
    }
  }
