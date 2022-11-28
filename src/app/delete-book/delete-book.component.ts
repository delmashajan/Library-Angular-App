import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

  title=""

  readValue=()=>
  {
    let data:any={"title":this.title}
    console.log(data)
  }

}
