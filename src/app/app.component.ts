import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import e from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'accountPrj1';

  public result : number=110;

  //defining method inside TypeScript

  // compute() {}

// public compute() : void {
  
// to access class variable , u always hav eto use 'this' keyword: as below e.g.
//     this.result=1000; 
//    console.log();   }

//after passting 'mallika'-  'template reference variable ' here 

public compute(input : any) : void {
  
  //to access class variable , u always hav eto use 'this' keyword: as below e.g.

      let num = input.value;
      num = num*num*num;
      this.result=num; 
  
     
  
  }




}

// this is the logic File,, we write logic of 'app-compo-html' file here ....