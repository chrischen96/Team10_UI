import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalDetailsPageRoutingModule } from './medical-details-routing.module';

import { MedicalDetailsPage } from './medical-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalDetailsPageRoutingModule
  ],
  declarations: [MedicalDetailsPage]
})
export class MedicalDetailsPageModule {}
