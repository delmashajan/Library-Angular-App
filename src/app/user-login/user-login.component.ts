import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  username=""
  password=""

  constructor(private route:Router){}

  readValue=()=>
  {
    let data:any={
      "password":this.password,"username":this.username
    }
    console.log(data)
    if (this.username=="admin" && this.password=="12345") {

      this.route.navigate(['/entry'])
      
    } else {

      alert("Invalid credentials")
      
    }
  }

}
