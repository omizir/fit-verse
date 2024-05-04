import {Component, inject, input} from '@angular/core';
import {Location} from "@angular/common";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'omz-page-header',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  pageTitle = input.required<string>();

  private location = inject(Location);

  navigateBack(): void {
    this.location.back();
  }
}
