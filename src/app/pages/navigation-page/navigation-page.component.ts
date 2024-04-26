import { Component } from '@angular/core';
import {BackgroundCardComponent} from "../../components/ui/background-card/background-card.component";
import {NavigationButtonComponent} from "../../components/ui/navigation-button/navigation-button.component";
import {UserCardComponent} from "../../components/ui/user-card/user-card.component";

@Component({
  selector: 'app-navigation-page',
  standalone: true,
  imports: [
    BackgroundCardComponent,
    NavigationButtonComponent,
    UserCardComponent
  ],
  templateUrl: './navigation-page.component.html',
  styleUrl: './navigation-page.component.scss'
})
export class NavigationPageComponent {

}
