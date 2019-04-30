import { Injectable } from '@angular/core';

/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class GetQtableService {

  /**
   * Creates an instance of get qtable service.
   */
  constructor() { }
  
  
  /**
   * Gets q
   * @returns q 
   */
  getQ(): string[] {
    //i will call node.js api to get updated list 



    //the sample for testing 
try {
    return ["A001", "A002", "A003"];
}
catch(err)
{
  console.log(err);
}

  }
}
