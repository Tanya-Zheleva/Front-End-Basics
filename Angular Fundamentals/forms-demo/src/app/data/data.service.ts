import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IUserSettings } from './user-settings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  public postUserSettingsForm(userSettings: IUserSettings): Observable<any> {
    let url = 'https://putsreq.com/5itxEDC8X595uF3NJIB6';

    return this.http
      .post(url , userSettings);
  }

  public getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }
}
