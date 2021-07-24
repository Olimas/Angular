import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  // inputText = 'Default text';
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bentley'];
  // items = [
  //   {id: 1, name: 'item 1'},
  //   {id: 2, name: 'item 2'},
  //   {id: 3, name: 'item 3'},
  // ]
  dates = [
    new Date(2015, 1, 5).toDateString(),
    new Date(2016, 2, 6).toDateString(),
    new Date(2017, 3, 7).toDateString(),
    new Date(2018, 4, 8).toDateString(),
    new Date(2019, 5, 9).toDateString(),
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }



  // setBigCarText(car: string) {
  //   return car.length > 4 ? true : false;
  // }

  // onKeyUp(event: Event) {
  //   // console.log(event);
  //   this.inputText = (<HTMLInputElement>event.target).value;
  // }


}
