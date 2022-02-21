import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TimerShellComponent } from './timer-shell.component'

describe('TimerShellComponent', () => {
  let component: TimerShellComponent
  let fixture: ComponentFixture<TimerShellComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerShellComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerShellComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
