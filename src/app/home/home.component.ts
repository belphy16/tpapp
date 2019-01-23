import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info:string = 'get started';

  // clears & deletes all data in sessionStorage
  clearSS() {
    sessionStorage.clear();
  }

  constructor() { }

  ngOnInit() {
  }

}
