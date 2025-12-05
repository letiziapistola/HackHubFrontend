import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataTransfer {
  
  roleSource = signal('VISITATOR');

  constructor() {}

  changeRole(role: string){ 
    this.roleSource.set(role);
  }

}
