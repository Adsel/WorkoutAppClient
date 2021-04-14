import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner-list',
  templateUrl: './planer-list.component.html',
  styleUrls: ['./planer-list.component.css']
})
export class PlanerListComponent implements OnInit {
  viewNameBold = 'Planer';
  viewNameRegular = '';
  constructor() { }

  ngOnInit(): void {
  }

}
