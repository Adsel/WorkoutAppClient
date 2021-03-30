import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alphabet-header',
  templateUrl: './alphabet-header.component.html',
  styleUrls: ['./alphabet-header.component.scss']
})
export class AlphabetHeaderComponent implements OnInit {
  @Input() viewName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
