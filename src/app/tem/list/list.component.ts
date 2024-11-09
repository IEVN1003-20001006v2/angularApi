import { Component } from '@angular/core';
import { MessageserviceService } from '../messageservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent {
constructor (public Messageservice: MessageserviceService) {

}
}