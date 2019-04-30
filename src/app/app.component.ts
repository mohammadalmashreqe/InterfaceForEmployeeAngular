import { Component } from '@angular/core';
import { GetQtableService } from './get-qtable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Tickets List';
  TicketsList: string[] = [];

  /**
   * Creates an instance of app component.
   * @param service 
   */
  constructor(service: GetQtableService) {
    try {
      this.TicketsList = service.getQ();
    }
    catch (err) {
      console.log(err)
    }
  }

  /**
   * Determines whether serve on
   */
  OnServe(): void {
    //here i will inshaallah call an API to send message through rabbit to serve on e person 
    //Key word : 
    //socket IO 

  }

}

