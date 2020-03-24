import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    ProductListComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule, //Angularmodulen importerer BrowserModule for å kjøre riktig i browser.
    FormsModule
  ],
  bootstrap: [AppComponent] //Forteller at oppstartskomponenten er AppComponent
})
export class AppModule { }
