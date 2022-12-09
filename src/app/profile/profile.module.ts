import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {ProfilePage} from "./profile.page";
import {ProfilePageRoutingModule} from "./profile-routing.module";
import {MinutesToHours} from "../minutes-hours.pipe";


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProfilePageRoutingModule
  ],
  declarations: [MinutesToHours, ProfilePage]
})
export class ProfilePageModule {}
