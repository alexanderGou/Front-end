import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogHeaderComponent } from './components/index/blog-header/blog-header.component';
import { BlogContentComponent } from './components/index/blog-content/blog-content.component';
import { BlogFooterComponent } from './components/index/blog-footer/blog-footer.component';
import { BlogMenuComponent } from './components/index/blog-menu/blog-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    BlogHeaderComponent,
    BlogContentComponent,
    BlogFooterComponent,
    BlogMenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
