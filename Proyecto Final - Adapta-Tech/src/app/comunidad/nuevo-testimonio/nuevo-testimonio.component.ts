import { Component } from '@angular/core';
import { TestimonioComponent } from '../testimonio/testimonio.component';

@Component({
  selector: 'app-nuevo-testimonio',
  standalone: true,
  imports: [TestimonioComponent],
  templateUrl: './nuevo-testimonio.component.html',
  styleUrl: './nuevo-testimonio.component.css'
})
export class NuevoTestimonioComponent {

}
