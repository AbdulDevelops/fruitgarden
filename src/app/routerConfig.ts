import {  Routes } from '@angular/router';
import { FruitListComponent } from './fruit-list/fruit-list.component';

const appRoutes: Routes = [
 { path: '**', redirectTo: '/fruit-list', pathMatch: 'full' },
  { path: 'fruit-list', component: FruitListComponent },
  //{ path: 'number-display', component: NumberDisplayComponent },


];

export default appRoutes;
