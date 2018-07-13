import { InstagramBoxListComponent } from './components/instagram-box-list/instagram-box-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "instagram/:instagramId", component: InstagramBoxListComponent },
  { path: "login", component: LoginComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
