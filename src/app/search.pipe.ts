import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], namesarch:any[]): any {
        return items.filter(item => item.name.indexOf(namesarch[0]) !==-1);
    }
}
