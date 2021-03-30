import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet-categories',
  templateUrl: './alphabet-categories.component.html',
  styleUrls: ['./alphabet-categories.component.scss']
})
export class AlphabetCategoriesComponent implements OnInit {
  viewNameBold = 'Exercise';
  viewNameRegular = 'Alphabet';

  constructor() {}

  ngOnInit = () => {};
}
