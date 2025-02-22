import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TimerButtonsComponent } from './timer-buttons.component'

describe('TimerButtonsComponent', () => {
  let component: TimerButtonsComponent
  let fixture: ComponentFixture<TimerButtonsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerButtonsComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerButtonsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
