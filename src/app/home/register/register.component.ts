import {Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder,
  ValidatorFn,
  ValidationErrors
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {RegisterService} from '../../core/register.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ConnectionRefusedComponent} from '../../shared/connection-refused/connection-refused.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private REGISTRATION_ERROR_MESSAGE_NO_CONNECTION = 'Cannot connect with server. Try again later.';
  private REGISTRATION_ERROR_MESSAGE = 'Unknown error. Try again later.';
  registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  showPassword = true;
  showConfirmPassword = true;
  minPasswordLength = 8;
  showLoading = false;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) { }

  get email(): any {
    return this.registerForm.get('email');
  }

  get password(): any {
    return this.registerForm.get('password');
  }

  get confirmPassword(): any {
    return this.registerForm.get('confirmPassword');
  }

  get f(): any {
    return this.registerForm.controls;
  }

  openConnectionRefusedDialog(): void{
    this.dialog.open(ConnectionRefusedComponent);
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
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
      ],
      confirmPassword: [
        '',
        Validators.required
      ]
    }, {
      validator: matchValidator,
    });
  }

  onPasswordInput(): any {
    if (this.registerForm.hasError('passwordMismatch')) {
      this.confirmPassword.setErrors([{passwordMismatch: true}]);
    } else {
      this.confirmPassword.setErrors(null);
    }
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }

    this.showLoading = true;

    this.registerService.postRegisterUser(
      {
        email: this.registerForm.get('email').value,
        password: this.registerForm.get('password').value
      }).subscribe(
      (val) => {
        console.log('VAL', val);
        this.showLoading = false;

        this.router.navigate(['/login']);
      },
      response => {
        this.showLoading = false;
        if (response.status === 0){
          this.openConnectionRefusedDialog();
        }else if (response.status === 401){
          this.email.setErrors([{emailInUse: true}]);
        }
        else{
          alert(this.REGISTRATION_ERROR_MESSAGE);
        }
      },
      () => {
        this.showLoading = false;
      });
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export const matchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  if (formGroup.get('password').value === formGroup.get('confirmPassword').value) {
    return null;
  } else {
    return {passwordMismatch: true};
  }
};
