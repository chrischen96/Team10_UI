import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientInformationPageRoutingModule } from './patient-information-routing.module';

import { PatientInformationPage } from './patient-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientInformationPageRoutingModule
  ],
  declarations: [PatientInformationPage]
})
export class PatientInformationPageModule {}
