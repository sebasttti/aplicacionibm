import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tc'
})
export class TcPipe implements PipeTransform {

  transform(value: any): any {

    const sb1 = value.substring(0, 3);
    const sb2 = value.substring(4, 7);
    const sb3 = value.substring(8, 11);
    const sb4 = value.substring(12, 16);

    return `${sb1} ${sb2} ${sb3} ${sb4}`;


    return 'Hola Mundo';
  }

}
