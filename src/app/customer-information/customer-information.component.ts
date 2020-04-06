import { Component, OnInit } from '@angular/core';
import { AddressbookItem } from '../addressbook-item';
import { AddressbookService } from '../addressbook.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer-information',
  templateUrl: './customer-information.component.html',
  styleUrls: ['./customer-information.component.css']
})
export class CustomerInformationComponent implements OnInit {
  items: AddressbookItem[];
  addItemForm;
  JSON: any;
  contactProps = [
    { name: 'name', value: 'имя'},
    { name: 'office', value: 'офис'},
    { name: 'site', value: 'штат'},
  ]
  constructor(
    private addressbookService: AddressbookService,
    private formBuilder: FormBuilder,
  ) { 
    this.JSON = JSON;
    this.addItemForm = this.formBuilder.group({
      contactInformation: '',
      hintInTheInputField: '',
      isRequired: false,
    });
  }

  ngOnInit() {
    this.getAddressbookItems();
  }

  getAddressbookItems(): void {
    this.items = this.addressbookService.getItems();
  }

  onSubmit(itemData): void {
    console.log(itemData);
    this.addItemForm.reset();
  }

}