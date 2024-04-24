import { Routes } from '@angular/router';
import {NavigationPageComponent} from "./pages/navigation-page/navigation-page.component";

export const routes: Routes = [
  { path: 'navigation', component: NavigationPageComponent },
  { path: '', redirectTo: '/navigation', pathMatch: 'full' }
];
