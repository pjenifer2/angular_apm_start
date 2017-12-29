import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: 
    `<html>
      <div>
        <h1>{{pageTitle}}</h1>
      </div>
    </html>`
  
})
export class AppComponent {
  title = 'Skywalker Getting Started';
  pageTitle: string = 'Skywalker Product Management'
}
