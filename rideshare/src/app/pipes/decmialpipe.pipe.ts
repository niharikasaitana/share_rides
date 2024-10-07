import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decmialpipe'
})
export class DecmialpipePipe implements PipeTransform {

  transform(value: number, digits: number = 2): string {
    return value.toFixed(digits);
  }

}
