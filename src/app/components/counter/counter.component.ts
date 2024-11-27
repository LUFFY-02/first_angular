import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  ct_value=signal(0);
  increment(){
    this.ct_value.update(val=>val+1);
  }
  decrement(){
    this.ct_value.update(val=>val-1);
  }
  reset(){
    this.ct_value.set(0);
  }

}
