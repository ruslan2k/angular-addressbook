import { Component, OnInit, Input } from '@angular/core';
import { AddressbookItem } from '../addressbook-item'

@Component({
  selector: 'app-addressbook-item',
  templateUrl: './addressbook-item.component.html',
  styleUrls: ['./addressbook-item.component.css']
})
export class AddressbookItemComponent implements OnInit {
  JSON: any;
  @Input() item: AddressbookItem;
  constructor() {
    this.JSON = JSON;
  }
  ngOnInit() {}

}