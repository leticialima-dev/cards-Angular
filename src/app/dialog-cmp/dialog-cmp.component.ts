import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-cmp',
  templateUrl: './dialog-cmp.component.html',
  styleUrls: ['./dialog-cmp.component.css']
})
export class DialogCmpComponent implements OnInit {

  nameDialog: string = ''
  lastnameDialog: string = ''
  usernameDialog: string = ''
  cpfDialog: string = ''
  phoneDialog: string = ''
  addressDialog: string = ''
  address2Dialog: string = ''


  constructor() { }

  ngOnInit(): void {
  }

}
