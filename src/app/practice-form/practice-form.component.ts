import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.scss']
})
export class PracticeFormComponent implements OnInit {

  name = 'Grady';
  enabled: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  clickButton() {
    alert('Button Click');
  }

}
