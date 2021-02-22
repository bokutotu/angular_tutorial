import { Injectable } from '@angular/core';

import { messages_map } from './message_store';

@Injectable({
  providedIn: 'root'
})
export class PersonalMessageService {

  messages = messages_map;

  constructor() { }

  getMessage(id: number): string[] {
    if (id in this.messages.keys()) {
      return this.messages.get(id);
    } else {
      return [] as string[];
    }
  }

  sendMessage(id: number, message: string): void {
    if ( id in this.messages.keys() ) {
      let message_array: Array<string> = this.messages.get(id);
      message_array.push(message);
      this.messages.delete(id);
      this.messages.set(id, message_array);
    } else {
      this.messages.set(id, [message]);
    }
  }

}
