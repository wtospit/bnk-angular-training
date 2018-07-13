import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { InstagramBoxListComponent } from './components/instagram-box-list/instagram-box-list.component';
import { InstagramBoxComponent } from './components/instagram-box/instagram-box.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BnkGirlComponent } from './components/bnk-girl/bnk-girl.component';

@NgModule({
  declarations: [
    AppComponent,
    BnkGirlComponent,
    InstagramBoxListComponent,
    InstagramBoxComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
