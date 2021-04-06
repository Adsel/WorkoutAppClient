import { Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';
@Component({
  selector: 'app-connection-refused',
  templateUrl: './connection-refused.component.html',
  styleUrls: ['./connection-refused.component.scss']
})
export class ConnectionRefusedComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  closeDialog(): void {
    this.dialog.closeAll();
  }

  ngOnInit(): void {
  }

}
