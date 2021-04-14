import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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
