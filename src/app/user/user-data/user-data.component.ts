import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../core/login.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  viewNameBold = 'User Data';
  viewNameRegular: 'Settings';
  newPassword: string;
  newPasswordRe: string;
  showPassword = false;
  showRePassword = false;

  constructor(
    private authService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.newPassword = '';
    this.newPasswordRe = '';
  }

  onSubmit($event: any): void {
    if (this.newPasswordRe !== '' && this.newPassword !== '') {
      if (this.newPasswordRe === this.newPasswordRe) {
        this.authService.changeUserPassword(this.newPassword, this.newPasswordRe).subscribe(() => {
          this.router.navigate(['/home']).then(() => null);
        });
      }
    }
  }
}
