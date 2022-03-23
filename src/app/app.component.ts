import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { DialogCmpComponent } from './dialog-cmp/dialog-cmp.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {

  constructor (private dialog: MatDialog) {}


  name: string = ''
  lastname: string = ''
  user: string = ''
  cpf: string = ''
  phone: string = ''
  addressUser: string = ''
  address2User: string = ''
  password: string = ''
  confirmpass: string = ''


  submit():void{

    console.log(`Name = ${this.name}`)
    console.log(`Lastname = ${this.lastname}`)
    console.log(`User = ${this.user}`)
    console.log(`Cpf = ${this.cpf}`)
    console.log(`Phone = ${this.phone}`)
    console.log(`AddressUser = ${this.addressUser}`)
    console.log(`Address2User = ${this.address2User}`)
    console.log(`Password = ${this.password}`)
    console.log(`ConfirmPass = ${this.confirmpass}`)

    if(this.password !== this.confirmpass) {
      alert('Senhas não são iguais, favor corrigir')
      return
    }

    let ref = this.dialog.open(DialogCmpComponent)
    
    ref.componentInstance.nameDialog = this.name
    ref.componentInstance.lastnameDialog = this.lastname
    ref.componentInstance.usernameDialog= this.user
    ref.componentInstance.cpfDialog = this.cpf
    ref.componentInstance.phoneDialog = this.phone
    ref.componentInstance.addressDialog = this.addressUser
    ref.componentInstance.address2Dialog = this.address2User

  }

}
 