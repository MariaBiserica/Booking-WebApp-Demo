import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export default class ButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }

}
