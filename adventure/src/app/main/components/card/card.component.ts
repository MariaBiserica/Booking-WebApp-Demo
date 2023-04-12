import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  displayImage: boolean = true;

  //trebuie sa injectam in constructor serviciul creat de noi pt a avea acces la el
  constructor(private router:Router, private cardService: CardService) { } 
  
  @Input() card!: Card; 
  @Output() cardEmitter: EventEmitter<Card> = new EventEmitter<Card>();

  ngOnInit(): void {}

  emitCard() {
    this.cardEmitter.emit(this.card);
    console.log(this.card);
  }
}
