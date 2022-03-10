import { Component, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(msg: any , action: any) {
    this._snackBar.open(msg, action);
  }

  @Input()
  titulo: string = ''
  @Input()
  dollar: string = ''
  @Input()
  subtitulo: string = ''
  @Input()
  para01: string = ''
  @Input()
  para02: string = ''
  @Input()
  para03: string = ''
  @Input()
  card02: string = ''

}