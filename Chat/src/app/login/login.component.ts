import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  baseForm: FormGroup;
  email: string;
  isLogin = true ;
  action = 'Login';
  constructor(private route: ActivatedRoute, fb: FormBuilder) {
    this.baseForm = fb.group({
      'UserName' : [null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]+')])],
      'PassWord' :  [null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]{8,15}')])]
    });
   }

  ngOnInit(){
    this.isLogin = this.route.snapshot.paramMap.get('action') === 'login';
    if (this.isLogin){
      this.action = 'Login';
    }else{
      this.action = 'Sign up';
    }

    console.log(this.isLogin);
  }

  submitForm(value: any): void{
    if (this.isLogin){
      console.log("登入驗證");
    }else{
      console.log("註冊寫DB");
    }
  }

}
