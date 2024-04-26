import {Component, input} from '@angular/core';
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'omz-user-card',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  userName = input.required<string>();
}
