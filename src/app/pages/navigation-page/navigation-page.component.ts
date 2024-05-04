import {Component, inject} from '@angular/core';
import {BackgroundCardComponent} from "../../components/background-card/background-card.component";
import {NavigationButtonComponent} from "../../components/navigation-button/navigation-button.component";
import {UserCardComponent} from "../../components/user-card/user-card.component";
import {FloatingIconButtonComponent} from "../../components/floating-icon-button/floating-icon-button.component";

@Component({
  selector: 'app-navigation-page',
  standalone: true,
  imports: [
    BackgroundCardComponent,
    NavigationButtonComponent,
    UserCardComponent,
    FloatingIconButtonComponent
  ],
  templateUrl: './navigation-page.component.html',
  styleUrl: './navigation-page.component.scss'
})
export class NavigationPageComponent {
}
