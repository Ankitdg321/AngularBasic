import { Component, effect, signal } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  count =0;

  handleIncrement(){

    this.count ++;
    console.log(this.count);

  }

   handleDecrement(){

    this.count --;
    console.log(this.count);

  }

   reset(){

    this.count =0;
    console.log(this.count);

  }








}
