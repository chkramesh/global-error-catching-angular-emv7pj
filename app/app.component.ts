import { Component } from '@angular/core';
import { Client } from './back-end/client';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  constructor(
    public client: Client,
  ) {}


  public ngOnInit(){
    this.client.fetch().subscribe((res: any) => console.log(res));
  }
}
