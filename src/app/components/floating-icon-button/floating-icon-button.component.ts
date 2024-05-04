import {Component, inject, input} from '@angular/core';
import {IconComponent, IconSize, IconType} from "../icon/icon.component";
import {Router} from "@angular/router";

@Component({
  selector: 'omz-floating-icon-button',
  standalone: true,
  imports: [
    IconComponent
  ],
  templateUrl: './floating-icon-button.component.html',
  styleUrl: './floating-icon-button.component.scss'
})
export class FloatingIconButtonComponent {
  iconType = input.required<IconType>();
  hoverEnabled = input<boolean>(false);
  size = input.required<IconSize>();
  action = input.required<Function | string>();

  private router = inject(Router);

  doAction(action: Function | string): void {
    if (typeof action === 'string') {
      this.router.navigateByUrl(action).catch(err => console.error(err));
    } else {
      action();
    }
  }
}
