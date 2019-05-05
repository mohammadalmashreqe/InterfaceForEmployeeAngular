import { Component } from '@angular/core';
import { MessageQueueService } from './message-queue.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  /**
   * Memberof  of app component
   */
  pageTitle = 'Q services';

  /**
   * List  of app component
   */
  List: string[];

  /**
   * Subscription  of app component
   */
  subscription: Subscription;
  


      /**
   * Creates an instance of app component.
   * @param service 
   */
  constructor(private service: MessageQueueService) {

  }

  /**
   * @memberof AppComponent
   */
  ngOnInit(): void {
    try {
      this.subscription = this.service.getQ()
        .subscribe(List => {
          this.List = List;
        });
    }
    catch (err) {
      console.log(err);
    }
  }





  /**
   * Determines whether new on
   * @memberof AppComponent
   */

  OnServe(): void {
    try {
      this.service.ServeTicket();
    }
    catch (err) {
      console.log(err);
    }
  }

  /**
    * @memberof AppComponent
   */

  ngOnDestroy() {
    try {
      this.subscription.unsubscribe();
    }
    catch (err) {
      console.log(err);
    }
  }


}

