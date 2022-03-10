import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CardComponent } from './card/card.component';
import { ToggleComponent } from './toggle/toggle.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ToggleComponent

    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }