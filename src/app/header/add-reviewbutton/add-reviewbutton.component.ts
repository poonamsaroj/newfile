import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { Newreviewpage1Component } from '../../newreviewpage1/newreviewpage1.component';

@Component({
  selector: 'app-add-reviewbutton',
  templateUrl: './add-reviewbutton.component.html',
  styleUrls: ['./add-reviewbutton.component.css']
})
export class AddReviewbuttonComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(Newreviewpage1Component);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
  }

}
