import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountService]
})
export class LoginComponent implements OnInit {

  baseForm: FormGroup;
  email: string;
  isLogin = true;
  action = 'Login';
  loginRes: string;
  constructor(private route: ActivatedRoute, private router: Router, fb: FormBuilder, private accountservice: AccountService) {
    this.baseForm = fb.group({
      'UserName': [null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]+'), Validators.pattern['^[:punct:]']])],
      'PassWord': [null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9]{8,15}')])],
      'showPwd': [false]
    });
  }

  ngOnInit() {
    this.isLogin = this.route.snapshot.paramMap.get('action') === 'login';
    if (this.isLogin) {
      this.action = 'Login';
    } else {
      this.action = 'Sign up';
    }

    console.log(this.isLogin);
  }

  submitForm(value: any): void {
    if (this.isLogin) {

      this.accountservice.Login(this.baseForm.controls['UserName'].value,
        this.baseForm.controls['PassWord'].value).subscribe((data) => {
          if (data['code'] !== '0') {
            this.loginRes = data['message'];
          } else {
            this.router.navigate(['chat']);
          }
        });

    } else {
      this.accountservice.Register(this.baseForm.controls['UserName'].value,
        this.baseForm.controls['PassWord'].value).subscribe((data) => {
          if (data['code'] !== '0') {
            this.loginRes = data['message'];
          } else {
            this.router.navigate(['chat']);
          }
        });

    }
  }

}
