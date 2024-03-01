import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router){}

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

  goToBody(){
    this.router.navigate(['/pageBody'])
  }

  goToGoals(){
    this.router.navigate(['/pageGoals'])
  }

}
