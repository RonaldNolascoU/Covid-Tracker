import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'covid-table',
  templateUrl: './covid-table.component.html',
  styleUrls: ['./covid-table.component.scss']
})
export class CovidTableComponent implements OnInit {
  public summary: any;
  @Output() global = new EventEmitter<any>();
  constructor(private covidService: CovidService) { }

  ngOnInit(): void {
    this.fetchSummary();
  }

  fetchSummary() {
    this.covidService.getData().subscribe(response => {
      this.summary = response;
      this.global.emit(response);
    })
  }

}
