import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TabViewModule } from "primeng/tabview";
import { ApiLoadService } from './api-load.service';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    AppComponent,
    FruitListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ButtonModule,
    TabViewModule,
    HttpClientModule,
    TagModule


  ],
  providers: [ApiLoadService],
  bootstrap: [AppComponent]
})
export class AppModule { }

