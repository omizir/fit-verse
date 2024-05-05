import {Injectable, signal} from '@angular/core';
import {Exercise} from "../../models/exercise.model";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly state = {
    $selectedCategory: signal<string>(''),
    $exercises: signal<Exercise[]>([
      {
        title: 'Cable Row',
        maximum: 60,
        type: 'weight',
        category: 'back',
        progressed: false
      },
      {
        title: 'Kabelzug Dual',
        maximum: 40,
        type: 'weight',
        category: 'back',
        progressed: true
      },
    ])
  } as const;

  public readonly $selectedCategory = this.state.$selectedCategory.asReadonly();
  public readonly $exercises = this.state.$exercises.asReadonly();

  constructor() { }

  setSelectedCategory(category: string): void {
    this.state.$selectedCategory.set(category);
  }

  toggleSelectedCategory(category: string): void {
    this.setSelectedCategory(this.state.$selectedCategory() === category ? '' : category);
  }

  clearCategory(): void {
    this.setSelectedCategory('');
  }
}
