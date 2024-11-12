import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bind-example',
  standalone: true,
  imports: [],
  templateUrl: './event-bind-example.component.html',
  styleUrl: './event-bind-example.component.css'
})
export class EventBindExampleComponent {
  times: number = 0;
  userInput: string = "";

  incrementTimes(){
    this.times++;
  }

  decrementTimes(){
    if(this.times==0){
      this.times=0;
    } else{
      this.times--;
    }
    
  }

  resetTimes(){
    this.times=0;
  }

  onUserInput(event: Event){
    this.userInput = (event.target as HTMLInputElement).value;
  }
}
