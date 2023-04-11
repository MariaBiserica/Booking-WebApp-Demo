import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title1: string = 'Discover the colorful world';
  title2: string = 'NEW ADVENTURE';

  constructor() { }

  ngOnInit() {
    //document.body.className = "selector-image";
  }

  ngOnDestroy(){
    document.body.className="";
  }

  discover() {
    console.log('discover clicked');
  }
}
