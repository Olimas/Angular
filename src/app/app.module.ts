import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import {FormsModule} from '@angular/forms';
import {AddCarComponent} from './add-car/add-car.component';
import {OwnDirectiveComponent} from './own-directive/own-directive.component';
import {BackgroundDirective} from './directives/background.directive';
import {PipesComponent} from './pipes/pipes.component';
import {PowPipe} from './own-pipe/pow.pipe';
import {CarFilterPipe} from './own-pipe/carFilter.pipe';
import {ServicesComponent} from './services/services.component';
import {Car2Component} from './services/car/car2.component';
import {Car2AddComponent} from './services/car-add/car2-add.component';
import {CarsService} from './own-service/cars.service';
import {ConsoleService} from './own-service/console.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    AddCarComponent,
    OwnDirectiveComponent,
    BackgroundDirective,
    PipesComponent,
    PowPipe,
    CarFilterPipe,
    ServicesComponent,
    Car2Component,
    Car2AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CarsService, ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
