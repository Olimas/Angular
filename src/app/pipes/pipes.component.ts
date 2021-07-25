import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  num = 5;
  name = 'Pipe';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested:
      {
        xyz: 3,
        numbers: [1, 2, 3]
      }
  };

  searchCar = '';
  cars = [
    {name: 'Ford', year: 2014, description: 'description 1'},
    {name: 'Audi', year: 2015, description: 'description 2'},
    {name: 'BMW', year: 2016, description: 'description 3'},
    {name: 'Mazda', year: 2017, description: 'description 4'},
    {name: 'Lada', year: 2018, description: 'description 5'},
    {name: 'Bentley', year: 2019, description: 'description 6'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  addCar() {
    this.cars.push({
      name: 'New car',
      year: 12345,
      description: 'new car'
    });
  }

  // asyncTitle = Observable.of('Async title 3 seconds').delay(3000);

}
