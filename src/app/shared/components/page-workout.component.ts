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
        <ion-title>Novo Treino</ion-title>
      </div>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <div class="content-wrapper">
      <ion-icon  name="skull" size="large"></ion-icon>
      <h3>Sem Treinos Novos</h3>
      <h4>Requisite novos treinos na recepção.</h4>
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
export class PageWorkout {
    constructor(private router: Router){}
    back(){
        this.router.navigate([''])
    }
}