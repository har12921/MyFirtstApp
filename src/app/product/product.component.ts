import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 myform: FormGroup;
  shomsg:any;
  constructor() { }

  ngOnInit() {
  }
yearfun=function(year){
// if(year<2017){

// this.shomsg="year must be greater than 2017";
// console.log("this.shomsg",this.shomsg);

// }
if (year>=2017) {

this.shomsg==undefined;	
console.log("this.shomsg",this.shomsg);
}else{

	this.shomsg="year must be greater than 2017";
}
}
}
