import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Message } from './message';


@Injectable({
  providedIn: 'root'
})
export class PersonalMessageService {
  
  private messagesUrl = 'api/messages';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getmessages(): observable<Message[]>  {
    return this.http.get<Message[]>(this.messagesUrl)
      .pipe(
        tap(messages => console.log('fetched heroes')),
        catchError(this.handleError<Message[]>('getheroes', []))
      );
  }

  getMessagesId<data>(id: number): Observable<Message> {
    const url = `${this.messagesUrl}/?id=${id}`;
    // const url = `this.messagesurl/${id}`;
    // console.log("this is personal-message service and request url is ", url);
    return this.http.get<Message[]>(url)
      .pipe(
        map(messages => messages[0]),
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          // this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<message>(`getmessagesno404 id=${id}` ))
      );
  }

  updateMessagesId(heroMessage: Message, newMessage: string): Observable<any> {

    let updatedMessage: Message = {id: heroMessage.id,
      messages: heroMessage.messages.concat([newMessage]) 
    };

    return this.http.put(this.messagesUrl, updatedMessage, this.httpOptions).pipe(
      tap(_ => console.log("update message")),
      catchError(this.handleError<Message>('update Message'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: リモート上のロギング基盤にエラーを送信する
      console.error(error); // かわりにconsoleに出力

      // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
      // this.log(`${operation} failed: ${error.message}`);

      // 空の結果を返して、アプリを持続可能にする
      return of(result as T);
    };
  }

  sendMessage(id: number, message: string): void {
    console.log("id", id, "input message", message);
  }

}
