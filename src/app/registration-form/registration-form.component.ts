import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent {
  @Output() formSubmitted = new EventEmitter<{ registerGroup: string, register: string }>();
  selectedRegisterGroup: string = ''; // To track the selected Register Group
  selectedRegister: string = ''; // To track the selected Register

  onSubmit() {
    // Handle form submission logic here

    // Assuming the form is successfully submitted and values are selected
    this.formSubmitted.emit({ registerGroup: this.selectedRegisterGroup, register: this.selectedRegister });
  }
}
