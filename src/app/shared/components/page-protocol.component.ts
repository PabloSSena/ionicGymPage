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
        <ion-title>Treino</ion-title>
      </div>
      <ion-progress-bar type="indeterminate"  color="primary"></ion-progress-bar>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">

  </ion-content>
`,
  standalone:true
})
export class PageProtocol {
    constructor(private router: Router){}
    back(){
        this.router.navigate([''])
    }
}