import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ContactComponent } from './contact/contact.component';
import { StaffComponent } from './staff/staff.component';


const routes: Routes = [
  {
    path:"",component: HomeComponent
  },
  {
    path: "list",component: ListComponent
  },
  {
    path: "contact",component: ContactComponent
  },
  {
    path: "staff",component: StaffComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
