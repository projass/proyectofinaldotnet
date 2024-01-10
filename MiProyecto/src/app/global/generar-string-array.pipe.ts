import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generarStringArray'
})
export class GenerarStringArrayPipe implements PipeTransform {

  transform(arrayString: string[]): string {
    return arrayString.join(', ');
  }

}
