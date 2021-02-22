import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Message } from './message';


@Injectable({
  providedIn: 'root'
})
export class PersonalMessageService {
  
  messages: Message[] = [
    {id:11, messages:["hoge"]},
    {id:12, messages:["hoge"]},
    {id:13, messages:["hoge"]},
    {id:14, messages:["hoge"]},
    {id:15, messages:["hoge"]},
    {id:16, messages:["hoge"]},
    {id:17, messages:["hoge"]},
    {id:18, messages:["hoge"]},
    {id:19, messages:["hoge"]},
    {id:20, messages:["hoge"]},
  ];

  constructor() { }

  getMessages(id: number): string[] {
    for (let i = 0; i < this.messages.length; i++) {
      let _item = this.messages[i];
      if (_item.id == id) {
        return _item.messages;
      }
    }

    return [] as string[];
  }

  sendMessage(id: number, message: string): void {
    console.log("id", id, "input message", message);
  }

}
