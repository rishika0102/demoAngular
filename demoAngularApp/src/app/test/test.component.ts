import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Jhon";
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  userName() {
    return "returning data by method calling"+" "+this.name;
  }

}
