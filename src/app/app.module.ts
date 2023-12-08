import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent }from './navbar/navbar.component';
import { DocumentsComponent } from './documents/documents.component';
import { ActivitiesComponent } from './activities/activities.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { ResultFilterBoxComponent } from './result-filter-box/result-filter-box.component';
import { RuleDefinitionsComponent } from './rule-definitions/rule-definitions.component';

import { DropdownComponent } from './dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SumTestComponent } from './sum-test/sum-test.component';
import { ConstantTestComponent } from './constant-test/constant-test.component';
import { SpikeTestComponent } from './spike-test/spike-test.component';
import { MissingDataTestComponent } from './missing-data-test/missing-data-test.component';
import { HistoryTestComponent } from './history-test/history-test.component';
import { ControlTestComponent } from './control-test/control-test.component';
import { CustomTestComponent } from './custom-test/custom-test.component';
// import { ReactiveFormsModule } from '@angular/forms';




const appRoutes: Routes = [
  { path: '', component: DocumentsComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'schedules', component: SchedulesComponent },
  // { path: '', component: SumTestComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DocumentsComponent,
    ActivitiesComponent,
    SchedulesComponent,
    ResultFilterBoxComponent,
    DropdownComponent,
    RuleDefinitionsComponent,
    RegistrationFormComponent,
    SumTestComponent,
    ConstantTestComponent,
    SpikeTestComponent,
    MissingDataTestComponent,
    HistoryTestComponent,
    ControlTestComponent,
    CustomTestComponent,
  


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    // ReactiveFormsModule,
    BrowserAnimationsModule, // Add FormsModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
