import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  template: `
    <select class="form-control">
      <option *ngFor="let option of options" [value]="option.value">{{ option.label }}</option>
    </select>
  `,
})
export class DropdownComponent {
  @Input() options: { label: string; value: any }[] = [];
}
