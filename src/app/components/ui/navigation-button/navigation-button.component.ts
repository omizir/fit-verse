import {Component, inject, input} from '@angular/core';
import {IconComponent, IconType} from "../icon/icon.component";
import {Router} from "@angular/router";

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
  url = input.required<string>();

  private router = inject(Router);

  navigate(): void {
    console.log('Navigating to ' + this.url())
    this.router.navigateByUrl(this.url()).catch(err => console.error(err));
  }
}
