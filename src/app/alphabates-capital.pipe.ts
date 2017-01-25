import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabatesCapital'
})
export class AlphabatesCapitalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('value' , value);

    return value.substring(0,1).toUpperCase()+value.substring(1);
  }

}
