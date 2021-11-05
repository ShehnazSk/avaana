import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAppComponent } from './header-app/header-app.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { ServiceAppComponent } from './service-app/service-app.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderAppComponent, HomeAppComponent, ServiceAppComponent],
})
export class WebsiteModule {}
