import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value,type) {
    if(type =='asc'){
      return value.sort((a,b)=>{
        if(a.price>b.price)
        return 1;
        else if (a.price<b.price)
        {
          return -1;
        }
        else
        {
          return 0;
        }
      })
    }
    else if (type='desc')
    {
      return value.sort((a,b)=>{
        if(a.price<b.price)
        return 1;
        else if(a.price>b.price)
        return -1;
        else
        return 0;
        })
    }
    else
    {
      return value;
    }

}
}
