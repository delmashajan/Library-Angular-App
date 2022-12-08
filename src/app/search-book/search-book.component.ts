import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {

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
