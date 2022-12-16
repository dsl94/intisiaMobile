import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'book',
        loadChildren: () => import('../book-flight/book-flight.module').then(m => m.BookFlightPageModule)
      },
      {
        path: 'dispatch',
        loadChildren: () => import('../dispatch/dispatch.module').then(m => m.DispatchPageModule)
      },
      {
        path: 'flight',
        loadChildren: () => import('../flight-details/flight-details.module').then(m => m.FlightDetailsPageModule)

      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
