import { Injectable } from '@angular/core';
import { AddressbookItem } from './addressbook-item';

@Injectable()
export class AddressbookService {

  constructor() { }

  getItems(): AddressbookItem[] {
    return [
      {
        id: 1,
        widgetId: 11,
        channelId: 111,
        contactInformation: 'ФИО',
        hintInTheInputField: 'Ваше имя',
        isRequired: false,
      },
      {
        id: 2,
        widgetId: 22,
        channelId: 222,
        contactInformation: 'ФИО',
        hintInTheInputField: 'Ваше имя',
        isRequired: false,
      },
    ];
  } 

}