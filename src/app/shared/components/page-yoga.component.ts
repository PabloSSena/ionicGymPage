import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-page-body',
  imports:[
    CommonModule,
    IonicModule,
  ],
  template: `
  <ion-header>
    <ion-toolbar color="header">
      <div style="display:flex;">
        <ion-button 
          slot="icon-only" 
          size="small" 
          color="header"
          (click)="back()"
          >
            <ion-icon name="arrow-back-outline"></ion-icon>
        </ion-button>
        <ion-title>Yoga Express</ion-title>
      </div>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div class="content-wrapper">
      <ion-icon  name="skull" size="large"></ion-icon>
      <h3>Sem aulas de Yoga</h3>
      <h4>Sem aulas de yoga disponíveis.</h4>
    </div>
  </ion-content>
`,
  styles: [`
 .content-wrapper {
    text-align: center;
  }
  h4{
    color:gray
  }
 `],
  standalone:true
})
export class PageYoga {
    constructor(private router: Router){}
    back(){
        this.router.navigate([''])
    }
}