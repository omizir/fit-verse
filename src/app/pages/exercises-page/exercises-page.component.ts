import {Component, inject, OnInit} from '@angular/core';
import {BackgroundCardComponent} from "../../components/background-card/background-card.component";
import {PageHeaderComponent} from "../../components/page-header/page-header.component";
import {ExerciseCategoryComponent} from "../../components/exercise-category/exercise-category.component";
import {StateService} from "../../services/state/state.service";

@Component({
  selector: 'omz-exercises-page',
  standalone: true,
  imports: [
    BackgroundCardComponent,
    PageHeaderComponent,
    ExerciseCategoryComponent
  ],
  templateUrl: './exercises-page.component.html',
  styleUrl: './exercises-page.component.scss'
})
export class ExercisesPageComponent implements OnInit {
  private state = inject(StateService);

  ngOnInit(): void {
    this.state.clearCategory();
  }
}
