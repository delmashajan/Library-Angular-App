import { Component } from '@angular/core';

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

  readValue=()=>
  {
    let data:any ={"title":this.title,"image":this.image,"author":this.author,"language":this.language,"description":this.description,"publisher":this.publisher,
  "distributor":this.distributor,"releasedyear":this.releasedyear,"price":this.price}

  console.log(data)
  }

}
