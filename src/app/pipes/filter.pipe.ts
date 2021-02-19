import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../models/product.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Products[], searchData: string): Products[] {
    if(searchData === undefined) {
      return products;
    } else {
      return products.filter(product => {
        return product.productName.toLocaleLowerCase().includes(searchData.toLocaleLowerCase());
      });
    }
  }

}
