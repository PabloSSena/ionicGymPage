import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.scss'],
  standalone:true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports:[
    CommonModule,
    IonicModule
  ]
})
export class SwipperComponent  implements OnInit {
  content: any[] = []
  constructor(private router: Router){}


  ngOnInit() {
    this.content = [
      {
        img:"../../../../assets/fotoAcademia1.jpg",
        text:"Novo Treino"
      },
      {
        img:"../../../../assets/fotoAcademia2.jpg",
        text:"Yoga Express"
      }
    ]
  }
  gotoWorkout(){
    this.router.navigate(['/pageWorkout'])
  }
  gotoYoga(){
    this.router.navigate(['/pageYoga'])
  }
  gotoProtocol(){
    this.router.navigate(['/pageProtocol'])
  }

}
