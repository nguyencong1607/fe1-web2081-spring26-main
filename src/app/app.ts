import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Contact, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // title = 'my-app';
  // fullName = 'Nguyễn Văn Công';

  sayHello(){
    console.log('hello');
    alert('hello' + this.fullName)
  }

  fullName = 'Angular';
  object = 'Framework';

}
