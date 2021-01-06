import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.scss']
})
export class SurveyCardComponent implements OnInit {
  @Input() question: string;
  @Input() maxvalue: number;
  @Input() minvalue: number;
  @Input() units: string;
  gridsize: number;
  @Output() results = new EventEmitter<any>();




  constructor() { }

  ngOnInit(): void {

  }

  sliderChanged(event: any): void {
    this.gridsize = event.value;
    this.results.emit(event.value);
}
}

