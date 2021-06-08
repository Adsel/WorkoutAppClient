import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG, UserData, UserDataResponse, UserLoginDTO} from '../model';
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

  getLoggedUser(): UserData {
    return JSON.parse(localStorage.getItem('logged_user'));
  }
}
