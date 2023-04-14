import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  displayImage: boolean = true;

  @Input() card!: Card; 
  @Output() cardEmitter: EventEmitter<Card> = new EventEmitter<Card>();

  constructor(private router:Router, private cardService: CardService) { } 
  
  ngOnInit(): void {}

  emitCard() {
    this.cardEmitter.emit(this.card);
    console.log(this.card);
  }

}
