import { Routes } from '@angular/router';
import {NavigationPageComponent} from "./pages/navigation-page/navigation-page.component";
import {ExercisesPageComponent} from "./pages/exercises-page/exercises-page.component";

export const routes: Routes = [
  { path: 'navigation', component: NavigationPageComponent },
  { path: 'exercises', component: ExercisesPageComponent },
  { path: '', redirectTo: '/navigation', pathMatch: 'full' }
];
