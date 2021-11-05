import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WebsiteModule { }
