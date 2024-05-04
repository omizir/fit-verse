import { Component } from '@angular/core';
import {BackgroundCardComponent} from "../../components/background-card/background-card.component";
import {PageHeaderComponent} from "../../components/page-header/page-header.component";

@Component({
  selector: 'omz-add-page',
  standalone: true,
  imports: [
    BackgroundCardComponent,
    PageHeaderComponent
  ],
  templateUrl: './add-page.component.html',
  styleUrl: './add-page.component.scss'
})
export class AddPageComponent {

}
