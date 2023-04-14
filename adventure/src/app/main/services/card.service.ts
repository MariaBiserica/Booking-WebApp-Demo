import { Injectable, OnInit } from '@angular/core';
import { Card } from '../models/card.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnInit{

  cardSubject = new Subject<Card>();

  constructor() {}

  ngOnInit(): void {}

  emitCardTitle(card: Card){
      this.cardSubject.next(card);
  }
}
