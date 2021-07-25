import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: false // по умолчанию true
})
export class CarFilterPipe implements PipeTransform {

  transform(carList: any, searchStr: string, fieldName: string): any {
    if (carList.length === 0 || searchStr === '') {
      return carList;
    }
    return carList.filter((car: { [x: string]: string; }) => car[fieldName].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1)
  }

}
