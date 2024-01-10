import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojComponent } from './reloj/reloj.component';
import { GenerarStringArrayPipe } from './generar-string-array.pipe';



@NgModule({
  declarations: [RelojComponent, GenerarStringArrayPipe],
  imports: [CommonModule],
  exports: [RelojComponent, GenerarStringArrayPipe],
})
export class GlobalModule { }
