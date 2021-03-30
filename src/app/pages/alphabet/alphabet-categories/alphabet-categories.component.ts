import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-alphabet-categories',
  templateUrl: './alphabet-categories.component.html',
  styleUrls: ['./alphabet-categories.component.scss']
})
export class AlphabetCategoriesComponent implements OnInit {
  viewName = 'Exercise Alphabet';

  constructor() {}

  ngOnInit = () => {};
}
