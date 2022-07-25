import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigleTaskComponent } from './sigle-task.component';

describe('SigleTaskComponent', () => {
  let component: SigleTaskComponent;
  let fixture: ComponentFixture<SigleTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigleTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigleTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
