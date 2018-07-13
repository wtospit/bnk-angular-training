import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InstagramBoxListComponent } from './components/instagram-box-list/instagram-box-list.component';
import { InstagramBoxComponent } from './components/instagram-box/instagram-box.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BnkGirlComponent } from './components/bnk-girl/bnk-girl.component';
import { LoginComponent } from './components/login/login.component';
import { BnkGirlListComponent } from './components/bnk-girl-list/bnk-girl-list.component';
import { BnkGirlEditorComponent } from './components/bnk-girl-editor/bnk-girl-editor.component';
import { JwtService } from './interceptors/jwt.service';

@NgModule({
  declarations: [
    AppComponent,
    BnkGirlComponent,
    InstagramBoxListComponent,
    InstagramBoxComponent,
    DashboardComponent,
    LoginComponent,
    BnkGirlListComponent,
    BnkGirlEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
