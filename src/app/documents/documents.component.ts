import { Component } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
  showInputBox: boolean = false;

  toggleInputBox() {
    this.showInputBox = !this.showInputBox;
  }


  isAccordionOpen: boolean = false;

  toggleResultFilter() {
    console.log('Toggling accordion');
    this.isAccordionOpen = !this.isAccordionOpen;
    console.log('isAccordionOpen:', this.isAccordionOpen);
  }
  
  
}


