import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() viewNameBold: string;
  @Input() viewNameRegular: string;
  @Input() viewNameThin?: string;
  @Input() imageUrl: string;

  constructor() { }

  ngOnInit(): void {
  }

}
