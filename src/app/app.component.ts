import { Component } from '@angular/core';
import { MessageQueueService } from './message-queue.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    resultOfCall:any; 
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
  subscriptionOfList: Subscription;
  
/**
   * Subscription  of app component
   */
  subscriptionResultOfcallAPI: Subscription;
  

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
     this.subscriptionOfList = this.service.getList()
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
      this.subscriptionResultOfcallAPI = this.service.ServeTicket()
      .subscribe(res => {
        this.resultOfCall = res;
    }
      )}
    catch (err) {
      console.log(err);
    }
  }

  /**
    * @memberof AppComponent
   */

  ngOnDestroy() {
    try {
      this.subscriptionOfList.unsubscribe();
      this.subscriptionResultOfcallAPI.unsubscribe();
    }
    catch (err) {
      console.log(err);
    }
  }


}

