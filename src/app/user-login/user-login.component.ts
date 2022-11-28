import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  username=""
  password=""

  readValue=()=>
  {
    let data:any={
      "password":this.password,"username":this.username
    }
  }

}
