import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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

}
