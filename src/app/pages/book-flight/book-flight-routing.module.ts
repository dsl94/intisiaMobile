import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFlightPage } from './book-flight.page';

const routes: Routes = [
  {
    path: '',
    component: BookFlightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookFlightPageRoutingModule {}
