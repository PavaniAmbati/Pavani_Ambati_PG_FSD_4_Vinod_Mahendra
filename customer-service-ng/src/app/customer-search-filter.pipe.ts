import { JsonPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerSearchFilter'
})
export class CustomerSearchFilterPipe implements PipeTransform {

  transform(value: any,args?: any): any {
    if(!value) return null;
    if(!args) return null;

      args = args.toLowerCase();
      
      return value.filter(function(data: any){
        return JSON.stringify(data).toLowerCase().includes(args);
      });
    }
  

}
