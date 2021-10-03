import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPostComponent } from './information-post.component';

describe('InformationPostComponent', () => {
  let component: InformationPostComponent;
  let fixture: ComponentFixture<InformationPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
