import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // title = 'my-app';
  // fullName = 'Nguyễn Văn Công';
  // age = 25;

  sayHello(){
    console.log('hello');
    alert('hello' + this.fullName)
  }

  fullName = 'Angular';
  object = 'Framework';



}
