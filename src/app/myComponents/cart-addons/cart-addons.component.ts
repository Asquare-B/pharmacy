import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddressComponent } from '../dialog-address/dialog-address.component';

@Component({
  selector: 'app-cart-addons',
  templateUrl: './cart-addons.component.html',
  styleUrls: ['./cart-addons.component.css']
})
export class CartAddonsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAddressComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
