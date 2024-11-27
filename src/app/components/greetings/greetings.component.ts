import { Component, input } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.scss'
})
export class GreetingsComponent {
  message=input('Greeting message here')
}
