import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteStaffCard } from './invite-staff-card';

describe('InviteStaffCard', () => {
  let component: InviteStaffCard;
  let fixture: ComponentFixture<InviteStaffCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteStaffCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteStaffCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
