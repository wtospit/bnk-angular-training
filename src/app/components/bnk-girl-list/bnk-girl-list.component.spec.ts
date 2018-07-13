import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkGirlListComponent } from './bnk-girl-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BnkGirlListComponent', () => {
  let component: BnkGirlListComponent;
  let fixture: ComponentFixture<BnkGirlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BnkGirlListComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkGirlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
