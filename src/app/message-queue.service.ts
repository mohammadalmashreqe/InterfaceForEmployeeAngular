import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageQueueService {

  /**
   * Url  of message queue service
   */
  private url = 'http://localhost:4001';
  List: string[];
  /**
   * Socket  of message queue service
   */
  private socket;
  /**
   * Observer  of message queue service
   */
  observer: Observer<string[]>;
  /**
   * Creates an instance of message queue service.
   */
  constructor(private http:HttpClient) {
    try {
      this.socket = io(this.url);
      this.ServeTicket();
    }
    catch (err) {
      console.log(err);
    }
  }




  /**
   * Gets q
   * @returns q 
   */
  getList(): Observable<string[]> {

    try {
      this.socket.on('UpadteList', (List) => {
      
        console.log("List is  : "+JSON.parse(List));
          this.observer.next(JSON.parse(List));
        });

      return this.createObservable();
    }

    catch (err) {
      console.log(err);
    }

  }
  




  /**
   * Creates observable
   * @returns observable 
   */
  createObservable(): Observable<any[]> {
    return new Observable(observer => {
      this.observer = observer;
    });
  }






  /**
   * Serve Ticket  
   */
  ServeTicket():Observable<any>  {
    try {
      console.log("serve from client side ")
      return this.http.get<any>("http://localhost:4001/serveTickets");
      
    }


    catch (err) {
      console.log(err);

    }
  }



}
