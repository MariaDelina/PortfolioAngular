import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondocoloresComponent } from './fondocolores.component';

describe('FondocoloresComponent', () => {
  let component: FondocoloresComponent;
  let fixture: ComponentFixture<FondocoloresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondocoloresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondocoloresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
