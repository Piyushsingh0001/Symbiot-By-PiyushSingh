import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-rule-definitions',
  templateUrl: './rule-definitions.component.html',
  styleUrls: ['./rule-definitions.component.css'],
})
export class RuleDefinitionsComponent implements OnInit {
  isAccordionOpen = true;
  isFormOpen = false;
  isFormSubmitted = false;
  selectedRegisterGroup: string = '';
  selectedRegister: string = '';
  isRuleDropdownVisible = true; // Initialize to true
  selectedRule: string | null = null;
   
  // sumTestInstances: any[] = [];
  // constantTestInstances: any[] = [];
  // spikeTestInstances: any[] = [];
  // missingDataTestInstances: any[] = [];
  // historyTestInstances: any[] = [];
  // controlTestInstances: any[] = [];
  // customTestInstances: any[] = [];

  showConstantTestBox = false;
  showSumTestBox = false;
  showHistoryTestBox = false;
  showSpikeTestBox = false;
  showControlTestBox = false;
  showCustomTestBox = false;
  showMissingTestBox = false;





  ngOnInit() {
    // Additional initialization logic if needed
  }

  toggleAccordion() {
    if (!this.isFormOpen) {
      this.isAccordionOpen = !this.isAccordionOpen;
    }
  }

  toggleForm() {
    this.isFormOpen = !this.isFormOpen;
  }

  onFormSubmitted(formValues: { registerGroup: string, register: string }) {
    this.selectedRegisterGroup = formValues.registerGroup;
    this.selectedRegister = formValues.register;
    this.isFormOpen = false; // Close the form
    this.isFormSubmitted = true; // Show the blue navbar
  }

  onDelete() {
    // Handle delete logic here
    // For now, let's reset everything
    this.selectedRegisterGroup = '';
    this.selectedRegister = '';
    this.isFormSubmitted = false;
    this.isRuleDropdownVisible = false;
    this.selectedRule = null;
   
  }

  // onSelectRule(rule: string | null) {
  //   this.selectedRule = rule;

  //   if (rule !== null) {
  //     let instancesArray: any[];

  //     switch (rule) {
  //       case 'sumTest':
  //         instancesArray = this.sumTestInstances;
  //         break;
  //       case 'constantTest':
  //         instancesArray = this.constantTestInstances;
  //         break;
  //       case 'spikeTest':
  //         instancesArray = this.spikeTestInstances;
  //         break;
  //       case 'missingDataTest':
  //         instancesArray = this.missingDataTestInstances;
  //         break;
  //       case 'historyTest':
  //         instancesArray = this.historyTestInstances;
  //         break;
  //       case 'controlTest':
  //         instancesArray = this.controlTestInstances;
  //         break;
  //       case 'customTest':
  //         instancesArray = this.customTestInstances;
  //         break;
  //       default:
  //         instancesArray = [];
  //         break;
  //     }

  //     instancesArray.push({}); // Add a new instance to the array
  //   }
  // }


  // getRuleInstances(rule: string): any[] {
  //   switch (rule) {
  //     case 'sumTest':
  //       return this.sumTestInstances;
  //     case 'constantTest':
  //       return this.constantTestInstances;
  //     case 'spikeTest':
  //       return this.spikeTestInstances;
  //     case 'missingDataTest':
  //       return this.missingDataTestInstances;
  //     case 'historyTest':
  //       return this.historyTestInstances;
  //     case 'controlTest':
  //       return this.controlTestInstances;
  //     case 'customTest':
  //       return this.customTestInstances;
  //     default:
  //       return [];
  //   }
  // }



  selectedTests: any[] = [];

  addTest(testType: string) {
    this.selectedTests.push({ type: testType });


    switch (testType) {
      case 'Sum Test':
        this.selectedRule = 'sumTest';
        break;

      case 'Constant Test':
        this.selectedRule = 'constantTest';
        break;
      case 'Spike Test':
        this.selectedRule = 'spikeTest';
        break;
      case 'Missing Data Test':
        this.selectedRule = 'missingDataTest';
        break;
      case 'History Test':
        this.selectedRule = 'historyTest';
        break;
      case 'Control Test':
        this.selectedRule = 'controlTest';
        break;
      case 'Custom Test':
        this.selectedRule = 'customTest';
        break;
      default:

        console.error('Invalid testType:', testType);
        break;

    }
  }


  removeTest(index: number) {
    this.selectedTests.splice(index, 1);
  }



}



