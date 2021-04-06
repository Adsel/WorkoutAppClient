import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() error = false;
  @Input() loading = false;

  constructor() { }

  ngOnInit(): void {
  }

}
