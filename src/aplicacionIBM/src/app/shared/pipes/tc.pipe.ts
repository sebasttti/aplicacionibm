import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tc'
})
export class TcPipe implements PipeTransform {

  transform(value: any): any {

    const sb1 = value.substring(0, 4);
    const sb2 = value.substring(4, 8);
    const sb3 = value.substring(8, 12);
    const sb4 = value.substring(12);

    return `${sb1} ${sb2} ${sb3} ${sb4}`;

  }

}
