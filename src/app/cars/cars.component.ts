import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: { name: string, year: number }[] = [
    {name: 'Ford', year: 2014},
    // {name: 'Audi', year: 2015},
    // {name: 'BMW', year: 2016},
    // {name: 'Mazda', year: 2017},
    // {name: 'Lada', year: 2018},
    // {name: 'Bentley', year: 2019},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  updateCarList(car: { name: string, year: number }) {
    this.cars.push(car);
  }

  changeCarName() {
    this.cars[0].name = 'New car name';
  }
  deleteCar() {
    this.cars.splice(0, 1);
  }

}
