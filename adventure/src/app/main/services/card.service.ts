import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private savedCard!: Card;
    cardSubject = new Subject<Card>();

  constructor() {}

  emitCardTitle(card: Card){
      this.cardSubject.next(card); // trimitem datele catre toti cei care sunt abonati la acest subject
  }
}
