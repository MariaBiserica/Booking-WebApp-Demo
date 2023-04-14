import { Component, OnInit, ViewChild } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card.model';
import { CARDS } from '../../mock-cards';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {

  title: string = "MOST POPULAR";
  receivedCard!: Card;
  arrayOfCards: Card[] = CARDS;
  
  pageSize = 6;
  page = 1;
  startIndex = (this.page - 1) * this.pageSize;
  endIndex = this.startIndex + this.pageSize;

  constructor(private cardService: CardService) {
    this.cardService.cardSubject.subscribe((card: Card) => {
      this.receivedCard = card;
    });
  }

  ngOnInit(): void {}

  setReceivedCard(event: any){
    this.receivedCard = event;
    this.subjectEmitCard();
  }

  subjectEmitCard(){
    this.cardService.emitCardTitle(this.receivedCard);
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.updatePage();
    }
  }

  nextPage() {
    if (this.page < this.totalPages()) {
      this.page++;
      this.updatePage();
    }
  }

  totalPages() {
    return Math.ceil(this.arrayOfCards.length / this.pageSize);
  }

  updatePage() {
    this.startIndex = (this.page - 1) * this.pageSize;
    this.endIndex = this.startIndex + this.pageSize;
  }

}

