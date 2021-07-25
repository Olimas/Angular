import {Component} from '@angular/core';
import {CarsService} from '../../own-service/cars.service';

@Component({
  selector: 'app-car2-add',
  templateUrl: './car2-add.component.html',
  styleUrls: ['./car2-add.component.css'],
  // providers: [CarsService]
})
export class Car2AddComponent{

  carName = '';

  constructor(private service: CarsService) {
  }

  addCar() {
    this.service.addCar(this.carName);
    this.carName = '';
  }

}
