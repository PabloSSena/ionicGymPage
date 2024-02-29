import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwipperComponent } from '../shared/components/swipper/swipper.component';
import { AppHeaderComponent } from '../shared/components/app-header/app-header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwipperComponent,
    AppHeaderComponent
  ],
  declarations: [HomePage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
