import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG, UserRegisterDTO} from '../model';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  postRegisterUser(userRegisterDTO: UserRegisterDTO): Observable<UserRegisterDTO> {
    return this.httpClient.post<UserRegisterDTO>(`${this.config.apiUrl}/user/register`, userRegisterDTO);
  }
}
