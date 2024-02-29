import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.component.html',
  styleUrls: ['./swipper.component.scss'],
  standalone:true,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SwipperComponent  implements OnInit {
  @Input() slides: any[] = []
  swiperModules = [IonicSlides]
  constructor() { }

  ngOnInit() {}

}
