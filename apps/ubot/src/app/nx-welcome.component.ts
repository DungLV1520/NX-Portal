import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nx-portal-nx-welcome',
  template: `
    <div class="wrapper">
      <div class="container">
        <div id="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome ubot 👋
          </h1>
        </div>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
