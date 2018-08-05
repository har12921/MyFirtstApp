import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
  name: "pipeTitle"
})
export class Page2Component implements PipeTransform  {

   transform(value:string): string {
  

 return value[0].toUpperCase()+ value.substr(1).toLowerCase();}

}