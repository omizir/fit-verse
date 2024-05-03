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
  size = input<IconSize>('small');

  sizeStrings: { [key in IconSize]: string } = {
    'small': 'w-6 h-6',
    'medium': 'w-8 h-8',
    'large': 'w-12 h-12'
  };

  getIconSizeString(): string {
    return this.sizeStrings[this.size()];
  }
}

export type IconType = 'trophy' | 'chevron-right' | 'play' | 'chart-bar' | 'cog' | 'user' | 'arrow-left';
export type IconSize = 'small' | 'medium' | 'large';
