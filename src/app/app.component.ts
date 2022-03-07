import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

incremento: number = 0

  constructor() {} 
 
  incrementar() {

      this.incremento = this.incremento + 1;
   
  }
  decrementar() {
      this.incremento = this.incremento - 1;
     
  }

}

export class ButtonOverviewExample {}