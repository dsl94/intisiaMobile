import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookFlightPageRoutingModule } from './book-flight-routing.module';

import { BookFlightPage } from './book-flight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookFlightPageRoutingModule
  ],
  declarations: [BookFlightPage]
})
export class BookFlightPageModule {}
