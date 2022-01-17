import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoFormComponent } from './components/demo-form/demo-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
