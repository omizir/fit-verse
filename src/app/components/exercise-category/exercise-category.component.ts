import {Component, computed, inject, input, OnInit} from '@angular/core';
import {IconComponent} from "../icon/icon.component";
import {StateService} from "../../services/state/state.service";

@Component({
  selector: 'omz-exercise-category',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './exercise-category.component.html',
  styleUrl: './exercise-category.component.scss'
})
export class ExerciseCategoryComponent {
  private state = inject(StateService);

  category = input.required<string>();
  color = input<CategoryColor>('blue');
  expanded = computed(() => {
    return this.state.$selectedCategory() === this.category();
  });

  colorString: { [key in CategoryColor]: string } = {
    'blue': 'bg-blue-400',
    'green': 'bg-green-400',
    'red': 'bg-red-400',
    'yellow': 'bg-yellow-400',
    'purple': 'bg-purple-400',
    'orange': 'bg-orange-400',
  };

  getColorString() {
    return this.colorString[this.color()];
  }

  expand(): void {
    this.state.toggleSelectedCategory(this.category());
  }
}

export type CategoryColor = 'blue' | 'red' | 'green' | 'yellow' | 'purple' | 'orange';
