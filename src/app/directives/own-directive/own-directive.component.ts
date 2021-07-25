import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-own-directive',
  templateUrl: './own-directive.component.html',
  styleUrls: ['./own-directive.component.scss']
})
export class OwnDirectiveComponent implements OnInit {
  headerText = 'Создание своей директивы';
  items = [1, 2, 3, 4, 5];
  current = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(number: number) {
    this.current = number;
  }

}
