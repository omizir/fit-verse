import { Component } from '@angular/core';
import {BackgroundCardComponent} from "../../components/ui/background-card/background-card.component";

@Component({
  selector: 'app-navigation-page',
  standalone: true,
    imports: [
        BackgroundCardComponent
    ],
  templateUrl: './navigation-page.component.html',
  styleUrl: './navigation-page.component.scss'
})
export class NavigationPageComponent {

}
