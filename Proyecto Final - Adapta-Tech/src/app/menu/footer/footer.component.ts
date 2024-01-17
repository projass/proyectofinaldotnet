import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactoComponent } from '../../contacto/contacto.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule,ContactoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
