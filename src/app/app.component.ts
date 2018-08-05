import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {

    heroes='';
empobj: Object = {};

//   constructor(private http: Http) {
 
//          var obj;
//          this.getJSON().subscribe(data =>this.heroes= data, error => console.log(error));
//     }
// private getJSON(): Observable<any> {
//     return this.http.get('data/empdetails.json')
//       .map((res:any)=> res.json().employees)
//       .catch((error:any) => {
//         return Observable.throw(error);
//       })
//   }
     
  title = 'app';
  submit:boolean=true;
  update=false;
  savedetails : Array<any> = [];

postdetails=function(){

 this.savedetails.push(this.empobj);
 console.log("savedetails",this.savedetails);
 this.empobj={};
 }

edtemp=function(lst,indx){
  console.log(lst,indx);
this.empobj=lst;
this.submit=false;
  this.update=true;
this.indxs=indx;


}

updetails=function(){
   this.savedetails[this.indxs]=this.empobj;
 this.empobj={};
this.submit=true;
  this.update=false;

}
delemp=function(lst,idx){
   this.savedetails.splice(idx,1);

}

   ravi=true; 
   temp="HARI PRASAD GUDIVADA"
   appList: any[] = [ {
      "ID": "1",
      "Name" : "One"
   },

   {
      "ID": "2",
      "Name" : "Two"
   } ];
}
