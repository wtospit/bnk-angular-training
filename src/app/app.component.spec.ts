import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InstagramBoxListComponent } from './components/instagram-box-list/instagram-box-list.component';
import { BnkGirlComponent } from './components/bnk-girl/bnk-girl.component';
import { InstagramBoxComponent } from './components/instagram-box/instagram-box.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DashboardComponent,
        InstagramBoxListComponent,
        BnkGirlComponent,
        InstagramBoxComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
