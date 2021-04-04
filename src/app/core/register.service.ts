import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG, UserRegisterDTO} from '../model';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {RegisterComponent} from '../home/register/register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient,
    @Inject(CONFIG) private config: Config
  ) { }

  postRegisterUser(userRegisterDTO: UserRegisterDTO): any {
    return this.httpClient.post<UserRegisterDTO>(`${this.config.apiUrl}/user/register`, userRegisterDTO).subscribe(
      (val) => {
        console.log(val);
        this.router.navigate(['/login']);
      },
      response => {
        console.log(response);
        //TODO Wprowadzić przekazywanie statusu do komponentu Register.Component

        //TODO Wprowadzić implementacje - brak połączenia
      },
      () => {
      });
  }
}
