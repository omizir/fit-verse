import { Component } from '@angular/core';
import {BackgroundCardComponent} from "../../components/ui/background-card/background-card.component";
import {PageHeaderComponent} from "../../components/ui/page-header/page-header.component";

@Component({
  selector: 'omz-exercises-page',
  standalone: true,
  imports: [
    BackgroundCardComponent,
    PageHeaderComponent
  ],
  templateUrl: './exercises-page.component.html',
  styleUrl: './exercises-page.component.scss'
})
export class ExercisesPageComponent {

}
