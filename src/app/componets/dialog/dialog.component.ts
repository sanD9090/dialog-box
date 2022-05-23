import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from 'src/app/components/dialog-example/dialog-example.component';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
openDialog(){
  this.dialog.open(DialogExampleComponent);
}
  ngOnInit(): void {
  }

}
