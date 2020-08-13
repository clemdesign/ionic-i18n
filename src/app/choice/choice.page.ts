import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.page.html',
  styleUrls: ['./choice.page.scss'],
})
export class ChoicePage implements OnInit {

  date: Date;

  constructor() {
    this.date = new Date();
  }

  ngOnInit() {
  }

}
