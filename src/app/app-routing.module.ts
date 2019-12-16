import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCardComponent } from './employee-card/employee-card.component';


const routes: Routes = [
  {path:"",redirectTo:'card', pathMatch: 'full' },
  {path:"card",component:EmployeeCardComponent}
];

  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
