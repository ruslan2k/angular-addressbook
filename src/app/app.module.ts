import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddressbookItemComponent } from './addressbook-item/addressbook-item.component';
import { AddressbookService } from './addressbook.service';
import { CustomerInformationComponent } from './customer-information/customer-information.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, AddressbookItemComponent, CustomerInformationComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AddressbookService]
})
export class AppModule { }
