import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TregiorniPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'tregiorni',
})
export class TregiorniPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(values: any[], day:string): any[] {
  	if (typeof values === 'undefined')  {
  		return values;
  	}
  	console.log(values);
	return values.filter( item => {
		return item['day'].includes(day);
	});
  }
}
