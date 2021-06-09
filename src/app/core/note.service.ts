import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Config, CONFIG, UserTrainingDayDTO} from '../model';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(
    private httpClient: HttpClient,
    private authService: LoginService,
    @Inject(CONFIG) private config: Config
  ) { }

  getTodayTrainingRows(userId: number): Observable<UserTrainingDayDTO[]> {
    return this.httpClient.get<UserTrainingDayDTO[]>(`${this.config.apiUrl}/training-rows/${userId}/today`);
  }

  saveNote(exerciseNote: UserTrainingDayDTO): Observable<UserTrainingDayDTO> {
    const userId = this.authService.getLoggedUserId();
    return this.httpClient.post<UserTrainingDayDTO>(
      `${this.config.apiUrl}/training-rows/${userId}/note`,
       exerciseNote,
      { headers: this.config.headersConfig });
  }
}
