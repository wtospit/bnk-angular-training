import { InstagramBoxListComponent } from './components/instagram-box-list/instagram-box-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './components/login/login.component';
import { BnkGirlListComponent } from './components/bnk-girl-list/bnk-girl-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import { BnkGirlEditorComponent } from './components/bnk-girl-editor/bnk-girl-editor.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'instagram/:instagramId', component: InstagramBoxListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: BnkGirlListComponent, canActivate: [AuthGuardService] },
  { path: 'admin/:id', component: BnkGirlEditorComponent, canActivate: [AuthGuardService] },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
