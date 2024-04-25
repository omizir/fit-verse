import {Component, input} from '@angular/core';
import {IconComponent, IconType} from "../icon/icon.component";

@Component({
  selector: 'omz-navigation-button',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss'
})
export class NavigationButtonComponent {
  title = input.required<string>();
  icon = input.required<IconType>();
}
