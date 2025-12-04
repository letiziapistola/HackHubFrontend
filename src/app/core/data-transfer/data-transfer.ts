import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataTransfer {
  /**
   * è l'Observable che emette dati nel tempo
   */
  private roleSource = new BehaviorSubject<any>(null);
  currentSelectedRole = this.roleSource.asObservable();

  constructor() {}

  /*
  è il Subscriber che ascolta l'Osservable.  
  Si iscrive per essere avvisato ogni volta che la sorgente emette un nuovo valore
  */
  changeRole(role: string){ 
    this.roleSource.next(role);
  }

}
