import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusCountComponent } from './cus-count.component';

describe('CusCountComponent', () => {
  let component: CusCountComponent;
  let fixture: ComponentFixture<CusCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CusCountComponent]
    });
    fixture = TestBed.createComponent(CusCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
