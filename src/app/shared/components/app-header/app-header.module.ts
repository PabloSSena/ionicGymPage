import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppHeaderComponent } from './app-header.component';
import { HomePageRoutingModule } from 'src/app/home/home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations:[AppHeaderComponent]
})
export class AppHeaderModule {}
