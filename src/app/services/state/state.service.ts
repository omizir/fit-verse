import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private readonly state = {
    $selectedCategory: signal<string>('')
  } as const;

  public readonly $selectedCategory = this.state.$selectedCategory.asReadonly();

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
