import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/observable/throw';

@Injectable()
export class Client {
  
  constructor(
    public http: HttpClient
  ) {}

  public fetch() {
    console.log('fetching');
    return this.http.post('https://thisurliswrong123123.com', {});
  }
}