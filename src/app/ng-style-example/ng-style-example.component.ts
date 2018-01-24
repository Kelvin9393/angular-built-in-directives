import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-style-example',
  templateUrl: './ng-style-example.component.html'
})
export class NgStyleExampleComponent implements OnInit {
  color = "green";
  fontSize = 16;

  constructor() { }

  ngOnInit() {
  }

  apply(color: string, fontSize: number) {
    this.color = color;
    this.fontSize = fontSize;
  }

}
