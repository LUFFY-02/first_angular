import { Component, signal } from '@angular/core';
import { GreetingsComponent } from '../components/greetings/greetings.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homemessage=signal('Hello, home component msg ')

  keyUpHandler(event: KeyboardEvent){
    console.log('user pressed ${event.key} key');
  }
}
