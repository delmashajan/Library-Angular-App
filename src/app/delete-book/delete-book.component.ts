import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {

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
        if(response.length==0){
          alert("invalid")
        }else{
          this.searchData=response
        }
      }
    )
  }
  deleteBtnClick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteBook(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("deleted")
          this.searchData=[]
        }
      }
    )
  }

}
