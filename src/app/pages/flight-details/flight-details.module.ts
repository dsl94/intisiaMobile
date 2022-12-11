import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlightDetailsPageRoutingModule } from './flight-details-routing.module';

import { FlightDetailsPage } from './flight-details.page';
import {RemoveCommaPipe} from "../../remove-comma.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightDetailsPageRoutingModule
  ],
  declarations: [RemoveCommaPipe, FlightDetailsPage]
})
export class FlightDetailsPageModule {}
