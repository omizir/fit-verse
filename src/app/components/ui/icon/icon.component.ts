import {Component, input} from '@angular/core';
@Component({
  selector: 'omz-icon',
  standalone: true,
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  iconType = input.required<IconType>();
  stroke = input.required<string>();
  hoverEnabled = input<boolean>(false);
}

export type IconType = 'trophy' | 'chevron-right' | 'play' | 'chart-bar';
