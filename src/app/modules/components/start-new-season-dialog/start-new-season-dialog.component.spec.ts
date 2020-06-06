import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartNewSeasonDialogComponent } from './start-new-season-dialog.component';

describe('StartNewSeasonDialogComponent', () => {
  let component: StartNewSeasonDialogComponent;
  let fixture: ComponentFixture<StartNewSeasonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartNewSeasonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartNewSeasonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
