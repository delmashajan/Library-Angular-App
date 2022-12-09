import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent {

  title=""

  constructor(private api:ApiService){}
  searchData:any=[]

  readValue=()=>
  {
    let data:any={"title":this.title}
    console.log(data)

    this.api.searchBook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("invalid")
          
        } else {

          this.searchData=response
          
        }
      }
    )
  }

}
