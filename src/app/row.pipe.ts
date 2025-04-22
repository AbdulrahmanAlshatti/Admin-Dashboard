import { Pipe, PipeTransform } from '@angular/core';
import {formatDate} from '@angular/common';

import { ImageLink } from '../data/users';

@Pipe({
  name: 'row',
  standalone: true
})
export class RowPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if(value == undefined)
      return '-'

    
    if(value instanceof Date)
      return (<Date>value).toDateString()//('hh:mm dd/MM/yyyy');


    if(typeof value === 'boolean')
        return value ? '✅' : '❎'

    let imageLink = this.isImage(value);

    console.log(value + ' - ' + imageLink);

    if(this.isImage(value))
      return `<img src="${value.imageLink}" class='testclass' ></img>`;

    return  value+'';
  }


   isImage(obj: unknown): obj is ImageLink {
    return (
      typeof obj === 'object' &&
      obj !== null &&
      'imageLink' in obj &&
      typeof (obj as any).imageLink === 'string'
    );
  }

}
