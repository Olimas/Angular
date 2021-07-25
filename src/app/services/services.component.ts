import {Component, OnInit} from '@angular/core';
import {CarsService} from './own-service/cars.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  // providers: [CarsService]
})
export class ServicesComponent implements OnInit {

  cars = [];

  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.cars = this.carsService.cars;
  }

}
