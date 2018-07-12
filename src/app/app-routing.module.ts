import { InstagramBoxListComponent } from './instagram-box-list/instagram-box-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

const routes : Routes = [
  { path: "", component: DashboardComponent },
  { path: "instagram/:instagramId", component: InstagramBoxListComponent },

]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
