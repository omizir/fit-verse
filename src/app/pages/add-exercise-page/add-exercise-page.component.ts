import { Component } from '@angular/core';
import {BackgroundCardComponent} from "../../components/background-card/background-card.component";
import {PageHeaderComponent} from "../../components/page-header/page-header.component";

@Component({
  selector: 'omz-add-exercise-page',
  standalone: true,
    imports: [
        BackgroundCardComponent,
        PageHeaderComponent
    ],
  templateUrl: './add-exercise-page.component.html',
  styleUrl: './add-exercise-page.component.scss'
})
export class AddExercisePageComponent {

}
