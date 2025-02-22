import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TimerMessageComponent } from './timer-message.component'

describe('TimerMessageComponent', () => {
  let component: TimerMessageComponent
  let fixture: ComponentFixture<TimerMessageComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimerMessageComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerMessageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
