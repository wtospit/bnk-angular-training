import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { InstagramBoxListComponent } from './instagram-box-list/instagram-box-list.component';
import { InstagramBoxComponent } from './instagram-box/instagram-box.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BnkGirlComponent } from './bnk-girl/bnk-girl.component';

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
