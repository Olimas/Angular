import { Component, Input } from '@angular/core';
import {ConsoleService} from '../own-service/console.service';

@Component({
  selector: 'app-car2',
  templateUrl: './car2.component.html',
  styleUrls: ['./car2.component.css'],
  // providers: [ConsoleService]
})
export class Car2Component {

  constructor(private consoleService: ConsoleService) {
  }

  @Input() car: any;

  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    }
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy' ? true : false;
    this.consoleService.log(`${this.car.name} status = ${type}`);
  }

}
