import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteTeamCard } from './invite-team-card';

describe('InviteTeamCard', () => {
  let component: InviteTeamCard;
  let fixture: ComponentFixture<InviteTeamCard>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InviteTeamCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteTeamCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
