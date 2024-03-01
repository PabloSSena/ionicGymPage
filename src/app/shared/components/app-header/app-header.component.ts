import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PageBody } from '../page-body.component';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  standalone:true,
  imports:[
    CommonModule,IonicModule
  ]
})
export class AppHeaderComponent  implements OnInit {

  notifications = [
    {
      title:"PROMOÇÃO",
      text:"O gerente ficou maluco, faça o plano anual e ganhe dois meses de graça."
    },
    {
      title:"REFORMA",
      text:"Nesta sexta-feira a academia irá estar fechada para reforma."
    },
    {
      title:"NOVO ESTOQUE",
      text:"Chegaram novas camisetas na academia, venha conferir!!!"
    }

  ]

  menuOptions = [
    {
      icon:"barbell-outline",
      text:"Meu treino"
    },
    {
      icon:"body-outline",
      text:"Avaliação Física"
    },
    {
      icon:"alarm-outline",
      text:"Cronômetro"
    },
    {
      icon:"today-outline",
      text:"Histórico de presença"
    },

  ]
  isNotifficationsOpen = false;
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.isNotifficationsOpen = true;

  }

  ngOnInit() {}

}
