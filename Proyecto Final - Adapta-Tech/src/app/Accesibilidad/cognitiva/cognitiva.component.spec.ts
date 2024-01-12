import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitivaComponent } from './cognitiva.component';

describe('CognitivaComponent', () => {
  let component: CognitivaComponent;
  let fixture: ComponentFixture<CognitivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CognitivaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CognitivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
