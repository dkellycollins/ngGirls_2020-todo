import { Component, VERSION } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="app-title">
      Welcome to {{ title }}!
    </h1>

    <app-list-manager></app-list-manager>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'Angular ' + VERSION.major;
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string) {
    this.todoList.push({ title });
  }
}
