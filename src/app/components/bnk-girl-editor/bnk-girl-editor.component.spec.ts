import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BnkGirlEditorComponent } from './bnk-girl-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('BnkGirlEditorComponent', () => {
  let component: BnkGirlEditorComponent;
  let fixture: ComponentFixture<BnkGirlEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BnkGirlEditorComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BnkGirlEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
