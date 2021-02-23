import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientInformationPage } from './patient-information.page';

const routes: Routes = [
  {
    path: '',
    component: PatientInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientInformationPageRoutingModule {}
