import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightDetailsPage } from './flight-details.page';

const routes: Routes = [
  {
    path: ':id',
    component: FlightDetailsPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightDetailsPageRoutingModule {}
