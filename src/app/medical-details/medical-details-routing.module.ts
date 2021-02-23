import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalDetailsPage } from './medical-details.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalDetailsPageRoutingModule {}
