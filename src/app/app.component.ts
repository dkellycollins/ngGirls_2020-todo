import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <hello name="{{ name }}"></hello>
    <p>
      Start editing to see some magic happen :)
    </p>

    <app-input-button-unit></app-input-button-unit>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
