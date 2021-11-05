import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WebsiteModule } from './website/website.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, WebsiteModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
