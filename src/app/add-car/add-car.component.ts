import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  carName = '';
  carYear = 2017;
  @Output('onAddCar') carEmitter = new EventEmitter<{ name: string, year: number }>();
  @ViewChild('carYearInput') carYearInput: ElementRef | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  addCar(carNameEl: HTMLInputElement) {
    // if (isNaN(Number(carNameEl.value))) {
    //   carNameEl.value = 'Не правильно введен год'
    // }
    // console.log(carNameEl.value);
    this.carEmitter.emit({
      name: carNameEl.value,
      year: +this.carYearInput?.nativeElement.value
      // year: this.carYear
      // name: this.carName,
    });

    carNameEl.value = '';
    this.carYearInput!.nativeElement.value = 2017;
    // this.carYear = 2017;
  }

}
