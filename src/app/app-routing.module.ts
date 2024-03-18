import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LabTestsComponent } from './pages/lab-tests/lab-tests.component';
import { BookAppointmentComponent } from './pages/book-appointment/book-appointment.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"lab-tests",
    component:LabTestsComponent
  },
  {
    path:"book-appointment",
    component:BookAppointmentComponent
  },
  {
    path:"Contact-Us",
    component:ContactUsComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"login-page",
    component:LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }