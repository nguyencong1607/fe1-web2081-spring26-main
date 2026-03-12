import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {

  name = 'Nguyễn Văn Công';
  age = 25;


  handleClick() {
    alert("Bạn đã click button");
  }
}