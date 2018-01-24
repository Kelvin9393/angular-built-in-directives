import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-switch-example',
  templateUrl: './ng-switch-example.component.html'
})
export class NgSwitchExampleComponent implements OnInit {
  choice = 1;

  constructor() { }

  ngOnInit() {
  }

  nextChoice() {
    this.choice = (this.choice < 5) ? this.choice + 1 : 1;
  }
}
