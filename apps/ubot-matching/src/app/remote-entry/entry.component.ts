import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'nx-portal-ubot-matching-entry',
  template: `<nx-portal-nx-welcome></nx-portal-nx-welcome>`,
})
export class RemoteEntryComponent {}
