import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';
import { Page2Component } from '../page2/page2.component';
import datepicker from 'angular-ui-bootstrap/src/datepicker';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})

@Injectable()
export class MaterialComponent implements OnInit {
 heroes: String;
 getarray:any=[];
   items: Array<any>;

    constructor(private http: Http) {
 
     
        }


  ngOnInit() {
  	 this.http
      .get("data/data.json")
      .map(data => data.json() as Array<any>)
      .subscribe(data => {
        this.items = data;
        console.log("this.items",this.items);
var minmarks=20;
var maxmarks=50;
  for(var i = 0; i < this.items.length; i++){
         if(this.items[i].marks.Maths<minmarks||this.items[i].marks.English<minmarks||this.items[i].marks.Science<minmarks){
             this.items[i].status='Fail'; 
         }
         else if(this.items[i].marks.Maths>=maxmarks||this.items[i].marks.English>=maxmarks||this.items[i].marks.Science>=maxmarks){
             this.items[i].status='Topper'; 
         }
         else{

         	this.items[i].status='Pass'
         }
      this.getarray.push({
          name:this.items[i].name,
          RollNumber:this.items[i].rollNumber,
          marks:parseInt(this.items[i].marks.Maths.toString())+parseInt(this.items[i].marks.English.toString())+parseInt(this.items[i].marks.Science.toString()),
          status:this.items[i].status
      })
                     console.log("this.getarray",this.getarray);

        }





      });
  }


}
