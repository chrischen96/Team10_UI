import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'patient-information',
    loadChildren: () => import('./patient-information/patient-information.module').then( m => m.PatientInformationPageModule)
  },
  {
    path: 'medical-details',
    loadChildren: () => import('./medical-details/medical-details.module').then( m => m.MedicalDetailsPageModule)
  },
  {
    path: 'reminder',
    loadChildren: () => import('./reminder/reminder.module').then( m => m.ReminderPageModule)
  },
  {
    path: 'educational',
    loadChildren: () => import('./educational/educational.module').then( m => m.EducationalPageModule)
  },
  {
    path: 'passcode',
    loadChildren: () => import('./passcode/passcode.module').then( m => m.PasscodePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
