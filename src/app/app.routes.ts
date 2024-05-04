import { Routes } from '@angular/router';
import {NavigationPageComponent} from "./pages/navigation-page/navigation-page.component";
import {ExercisesPageComponent} from "./pages/exercises-page/exercises-page.component";
import {AddPageComponent} from "./pages/add-page/add-page.component";
import {AddExercisePageComponent} from "./pages/add-exercise-page/add-exercise-page.component";

export const routes: Routes = [
  { path: 'navigation', component: NavigationPageComponent },
  { path: 'exercises', component: ExercisesPageComponent },
  { path: 'add', component: AddPageComponent },
  { path: 'add/exercise', component: AddExercisePageComponent },
  { path: '', redirectTo: '/navigation', pathMatch: 'full' }
];
