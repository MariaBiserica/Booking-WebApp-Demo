import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  title1: string = 'Discover the colorful world';
  title2: string = 'NEW ADVENTURE';

  constructor(private cardService: CardService) {
    this.cardService.cardSubject.subscribe((card: Card) => {
      this.title2 = card.title;
      console.log('got card from service: ', card);
    });
  }

  ngOnInit(): void {}

  discover() {
    console.log('discover clicked');
  }
  
}
