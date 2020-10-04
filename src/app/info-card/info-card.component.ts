import { Component, Input, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements AfterViewChecked {

  constructor() { }
  @Input() globalData: any;
  ngAfterViewChecked(): void {
  }

}
