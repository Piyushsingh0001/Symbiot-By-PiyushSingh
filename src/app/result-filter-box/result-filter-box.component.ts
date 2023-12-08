import { Component, OnInit } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component'; 
import { RuleDefinitionsComponent } from '../rule-definitions/rule-definitions.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-result-filter-box',
  templateUrl: './result-filter-box.component.html',
  styleUrls: ['./result-filter-box.component.css'],
})
export class ResultFilterBoxComponent implements OnInit {
  constructor() {}


  originOptions = [
    { label: 'Prefer Modified', value: 'option1' },
    { label: 'Only Raw', value: 'option2' },
    { label: 'Only Modified', value: 'option1' },
    { label: 'Prefer Raw', value: 'option1' },
    // Add more options as needed
  ];

  sourceOptions = [
    { label: 'Aggregated', value: 'source1' },
    { label: 'Estimated', value: 'source2' },
    { label: 'Imported', value: 'source1' },
    { label: 'Manual', value: 'source2' },
    { label: 'Measured', value: 'source2' },
    // Add more options as needed
  ];

  statusOptions = [
    { label: 'Billing reset', value: 'status1' },
    { label: 'Clock Adjusted', value: 'status2' },
    { label: 'Clock Invalid', value: 'status1' },
    { label: 'Clock Synchronized Delivered', value: 'status2' },
    { label: 'Device Error or Fatal error', value: 'status1' },
    { label: 'Disturbed Value', value: 'status2' },
    { label: 'Daylight saving time Active', value: 'status1' },
    { label: 'Daylight saving time change', value: 'status2' },
    { label: 'Measurement Period Longer', value: 'status1' },
    { label: 'Measurement Period Shorter', value: 'status2' },
    { label: 'No Power', value: 'status1' },
    { label: 'Not Valid', value: 'status2' },
    { label: 'Overflowed Value', value: 'status1' },
    { label: 'Parameter Change', value: 'status2' },
    { label: 'Power down', value: 'status1' },
    { label: 'Power down L1', value: 'status2' },
    { label: 'Power down L2', value: 'status2' },
    { label: 'Power down L3', value: 'status2' },
    { label: 'Power  Up', value: 'status1' },
    { label: 'Power  Up L1', value: 'status1' },
    { label: 'Power  Up L2', value: 'status1' },
    { label: 'Power  Up L3', value: 'status1' },
    { label: 'Unit Mismatch', value: 'status1' },
    { label: 'Unknow Status', value: 'status1' },
    { label: 'Other', value: 'status1' },
    { label: 'Validated', value: 'status1' },
    // Add more options as needed
  ];
  isAccordionVisible: boolean = false;

 

  openRegistrationModal() {
    // Implement code to open the registration modal here
  }



  ngOnInit(): void {}

  toggleAccordion() {
    const panel = document.querySelector('.panel') as HTMLElement | null;
    if (panel) {
      panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
    }
  }




}





