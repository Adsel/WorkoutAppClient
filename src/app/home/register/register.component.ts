import {Component, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidatorFn,
  ValidationErrors
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  matcher = new MyErrorStateMatcher();

  showPassword = true;
  showConfirmPassword = true;

  minPasswordLength = 8;

  constructor(private formBuilder: FormBuilder) { }

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
      validator: passwordMatchValidator
    });
  }

  get email(): any { return this.registerForm.get('email'); }
  get password(): any { return this.registerForm.get('password'); }
  get confirmPassword(): any { return this.registerForm.get('confirmPassword'); }
  get f(): any { return this.registerForm.controls; }

  onPasswordInput(): any {
    if (this.registerForm.hasError('passwordMismatch')) {
      this.confirmPassword.setErrors([{passwordMismatch: true}]);
    }
    else {
      this.confirmPassword.setErrors(null);
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }


}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  if (formGroup.get('password').value === formGroup.get('confirmPassword').value) {
    return null;
  }
  else {
    return {passwordMismatch: true};
  }
};
