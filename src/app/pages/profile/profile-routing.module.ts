import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfilePage} from "./profile.page";
import {FlightDetailsPage} from "../flight-details/flight-details.page";
import {TabsPage} from "../tabs/tabs.page";

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule {}
