import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // Import RouterModule for routing
import { WelcomePgComponent } from './welcome-pg/welcome-pg.component';
import { ViewAppointmentPgComponent } from './view-appointment-pg/view-appointment-pg.component';
import { PlaceAppointmentPgComponent } from './place-appointment-pg/place-appointment-pg.component';
import { QueryPgComponent } from './query-pg/query-pg.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' ,pathMatch:'full'},
  { path: 'home', component: WelcomePgComponent },
  { path: 'viewAppointment', component: ViewAppointmentPgComponent },
  { path: 'placeAppointment', component: PlaceAppointmentPgComponent },
  { path: 'query', component: QueryPgComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
