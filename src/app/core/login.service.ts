import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ChangePasswordData, Config, CONFIG, UserData, UserDataResponse, UserLoginDTO} from '../model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  postLoginUser(userLoginDTO: UserLoginDTO): Observable<UserDataResponse> {
    return this.httpClient.post<UserDataResponse>(`${this.config.apiUrl}/user/login`, userLoginDTO);
  }

  changeUserPassword(passwd: string, repasswd: string): Observable<any> {
    return this.httpClient.post<UserDataResponse>(
      `${this.config.apiUrl}/user/password/change`,
      {
        userId: this.getLoggedUserId(),
        password: passwd,
        rePassword: repasswd
      },
      { headers: this.config.headersConfig }
    );
  }

  getLoggedUser(): UserData {
    return JSON.parse(localStorage.getItem('logged_user'));
  }

  getLoggedUserId(): number {
    const loggedUser = JSON.parse(localStorage.getItem('logged_user'));
    return loggedUser.id;
  }
}
