import {Component, inject, OnInit, Signal} from '@angular/core';
import {BackgroundCardComponent} from "../../components/background-card/background-card.component";
import {PageHeaderComponent} from "../../components/page-header/page-header.component";
import {ExerciseCategoryComponent} from "../../components/exercise-category/exercise-category.component";
import {StateService} from "../../services/state/state.service";
import {FloatingIconButtonComponent} from "../../components/floating-icon-button/floating-icon-button.component";
import {Exercise, ExerciseCategory} from "../../models/exercise.model";
import {IconComponent} from "../../components/icon/icon.component";

@Component({
  selector: 'omz-exercises-page',
  standalone: true,
  imports: [
    BackgroundCardComponent,
    PageHeaderComponent,
    ExerciseCategoryComponent,
    FloatingIconButtonComponent,
    IconComponent
  ],
  templateUrl: './exercises-page.component.html',
  styleUrl: './exercises-page.component.scss'
})
export class ExercisesPageComponent implements OnInit {
  exerciseMap: Map<ExerciseCategory, Exercise[]> = new Map<ExerciseCategory, Exercise[]>();
  selectedCategory!: Signal<string>;

  private state = inject(StateService);

  ngOnInit(): void {
    this.selectedCategory = this.state.$selectedCategory;
    this.mapExercises();
    this.state.clearCategory();
  }

  mapExercises(): void {
    this.state.$exercises()
      .forEach(
        exercise => this.exerciseMap
          .set(
            exercise.category,
            [
              ...this.exerciseMap.get(exercise.category) ?? [],
              exercise
            ]
          )
      )
  }
}
