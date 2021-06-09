import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG, UserDto} from '../model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  getUserData(id: number): Observable<UserDto> {
    return this.httpClient.get<UserDto>(`${this.config.apiUrl}/user/${id}`);
  }
}
