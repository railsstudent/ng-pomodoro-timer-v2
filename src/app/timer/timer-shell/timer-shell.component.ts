import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-timer-shell',
  template: `
    <div class="h-full bg-sky-400">
      <p>app-shell works!</p>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100vh;
      }
    `,
  ],
})
export class TimerShellComponent implements OnInit {
  ngOnInit(): void {
    console.log('ddd')
  }
}
