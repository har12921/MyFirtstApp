import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[app-directives]',
})
export class DirectivesComponent  {

  constructor(el:ElementRef) {
  	console.log("elasasda",el);
  el.nativeElement.style.background="skyblue" 
}



}
