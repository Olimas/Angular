import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {FormsModule} from '@angular/forms';
import { AddCarComponent } from './add-car/add-car.component';
import { OwnDirectiveComponent } from './own-directive/own-directive.component';
import {BackgroundDirective} from './directives/background.directive';
import { PipesComponent } from './pipes/pipes.component';
import {PowPipe} from './own-pipe/pow.pipe';
import { CarFilterPipe } from './own-pipe/carFilter.pipe';

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
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
