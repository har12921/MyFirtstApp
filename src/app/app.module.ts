import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MaterialComponent } from './material/material.component';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './search.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MaterialComponent,
    FilterPipe,
    DirectivesComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDatepickerModule.forRoot(),      
    RouterModule.forRoot([{
       path:'home',
       component:Page1Component,

    },{
       path:'table',
       component:MaterialComponent,


    },{
       path:'form',
       component:ProductComponent

    }, {
   path: '',
   redirectTo: '/home',
   pathMatch: 'full'
 }
    ],{
      enableTracing:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
