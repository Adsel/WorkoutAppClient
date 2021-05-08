import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators
} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
import {ConnectionRefusedComponent} from '../../shared/connection-refused/connection-refused.component';
import {LoginService} from '../../core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  viewNameBold = 'Workout';
  viewNameRegular = 'Login';
  private LOGIN_ERROR_MESSAGE = 'Unknown error. Try again later.';
  loginForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  showPassword = true;
  minPasswordLength = 8;
  showLoading = false;
  rememberLogin: boolean;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  get email(): any {
    return this.loginForm.get('email');
  }

  get password(): any {
    return this.loginForm.get('password');
  }

  get f(): any {
    return this.loginForm.controls;
  }

  openConnectionRefusedDialog(): void{
    this.dialog.open(ConnectionRefusedComponent);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(this.minPasswordLength),
          Validators.pattern('^[a-zA-Z0-9_.-]*$')
        ]
      ]
    });
    console.log(localStorage.getItem('rememberLogin') );
    if (localStorage.getItem('rememberLogin') === 'true'){
      this.rememberLogin = true;
      const userLogin = JSON.parse(localStorage.getItem('loginData'));
      this.loginForm.get('email').setValue(userLogin.email);
      this.loginForm.get('password').setValue(userLogin.password);
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    this.showLoading = true;

    this.loginService.postLoginUser(
      {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value
      }).subscribe(
      (val) => {
        console.log('VAL', val);
        if (this.rememberLogin){
          localStorage.setItem('rememberLogin', String(true));
          localStorage.setItem('loginData', JSON.stringify({
            email: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
          }));
          this.rememberLogin = true;
        }
        else {
          localStorage.setItem('rememberLogin', String(false));
        }
        this.showLoading = false;
        this.router.navigate(['/home']).then(() => null);
      },
      response => {
        this.showLoading = false;
        if (response.status === 0){
          this.openConnectionRefusedDialog();
        }else if (response.status === 401){
          this.password.setErrors([{wrongLogin: true}]);
        }
        else{
          alert(this.LOGIN_ERROR_MESSAGE);
        }
      },
      () => {
        this.showLoading = false;
      });
  }

  onChange($event: MatSlideToggleChange): void {
    this.rememberLogin = $event.checked;
    if (!this.rememberLogin){
      localStorage.removeItem('loginData');
      localStorage.removeItem('rememberLogin');
    }
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
