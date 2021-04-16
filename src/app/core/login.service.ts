import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG, UserLoginDTO} from '../model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  postLoginUser(userLoginDTO: UserLoginDTO): Observable<UserLoginDTO> {
    return this.httpClient.post<UserLoginDTO>(`${this.config.apiUrl}/user/login`, userLoginDTO);
  }
}
