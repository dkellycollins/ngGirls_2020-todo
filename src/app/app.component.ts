import { Component, VERSION } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'my-app',
  template: `
    <hello name="{{ name }}"></hello>
    <p>
      Start editing to see some magic happen :)
    </p>

    <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
    <ul>
      <li *ngFor="let todoItem of todoList">
        <app-todo-item [item]="todoItem"></app-todo-item>
      </li>
    </ul>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
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
