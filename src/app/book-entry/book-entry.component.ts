import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {

  title=""
  image=""
  author=""
  language=""
  description=""
  publisher=""
  distributor=""
  releasedyear=""
  price=""

  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any ={"title":this.title,"image":this.image,"author":this.author,"language":this.language,"description":this.description,"publisher":this.publisher,
  "distributor":this.distributor,"releasedyear":this.releasedyear,"price":this.price}

  console.log(data)
  this.api.addBook(data).subscribe(
    (response:any)=>{
      console.log(response)
      if(response.status=="success"){
        alert("success")
        this.author=""
        this.description=""
        this.distributor=""
        this.image=""
        this.language=""
        this.price=""
        this.publisher=""
        this.title=""
        this.releasedyear=""
      }else{
        alert("wrong")

      }
    }
  )
  }

}
