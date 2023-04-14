import { Component } from '@angular/core';
import { Card } from '../../models/card.model';
import { CARDS } from '../../mock-cards';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component {

  title1: string = "Search & Book all our destinations";
  title2: string = "OUR SERVICES";

  receivedCard!: Card;
  arrayOfCards: Card[] = CARDS;
  searchTerm: string = "";
  searchResults: any[] = [];
  searchSuccessful: boolean = true;

  constructor(private cardService: CardService) {
    this.cardService.cardSubject.subscribe((card: Card) => {
      this.receivedCard = card;
    });
  }

  setReceivedCard(event: any){
    this.receivedCard = event;
    this.subjectEmitCard();
  }

  subjectEmitCard(){
    this.cardService.emitCardTitle(this.receivedCard);
  }

  get filteredCities() {
    this.searchResults = [];

    this.searchResults = this.arrayOfCards.filter((city) =>
      city.title.toLowerCase() == this.searchTerm.toLowerCase()
    );

    if (this.searchResults.length === 0) {
      this.searchSuccessful = false;
    } else {
      this.searchSuccessful = true;}

    return this.searchResults;
  }
}
