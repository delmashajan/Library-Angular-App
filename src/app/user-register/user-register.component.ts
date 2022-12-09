import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  name=""
  aadhar=""
  address=""
  pincode=""
  dob=""
  email=""
  phone=""
  username=""
  password=""
  confirmpassword=""

  constructor(private route:Router){}

  readValue=()=>
  {
    let data:any={
      "name":this.name,"aadhar":this.aadhar,"address":this.address,
      "pincode":this.pincode,
      "dob":this.dob,
      "email":this.email,
      "phone":this.phone,
      "username":this.username,
      "password":this.password,
      "confirmpassword":this.confirmpassword
    }

    console.log(data)

    if(this.password==this.confirmpassword){
      alert("registered successfully")
      this.name=""
      this.pincode=""
      this.dob=""
      this.email=""
      this.phone=""
      this.username=""
      this.password=""
      this.confirmpassword=""
    }
    
  }



}
