import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <hello name="{{ name }}"></hello>
    <p>
      Start editing to see some magic happen :)
    </p>

    <app-input-button-unit></app-input-button-unit>
    <ul>
      <li *ngFor="let todoItem of todoList">
        {{ todoItem.title }}
      </li>
    </ul>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  todoList = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];
}
