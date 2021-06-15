import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashPageComponent } from './dashboard/dash-page/dash-page.component';


const routes: Routes = [
  {
    path: '', component: DashPageComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
