import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alphabet-header',
  templateUrl: './alphabet-header.component.html',
  styleUrls: ['./alphabet-header.component.scss']
})
export class AlphabetHeaderComponent implements OnInit {
  @Input() viewNameBold: string;
  @Input() viewNameRegular: string;
  @Input() level: number;
  private availableLevelClassess = [
    'header-image-first',
    'header-image-second',
    'header-image-third'
  ];
  public currentLevelClass: string;

  constructor() { }

  ngOnInit(): void {
    this.currentLevelClass = this.availableLevelClassess[this.level];
  }

}
