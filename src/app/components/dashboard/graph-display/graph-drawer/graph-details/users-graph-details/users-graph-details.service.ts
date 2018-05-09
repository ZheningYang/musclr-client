import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UsersGraphDetailsService {

  private nodeSource = new BehaviorSubject<string>("yoyo");
  currentNode = this.nodeSource.asObservable();
  
  constructor() { }

  changeNode(node: string){
    this.nodeSource.next(node);
  }

}
