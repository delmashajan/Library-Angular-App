import { Component } from '@angular/core';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent {
  books:any=[
    {
      "title":"Pathummayude Aadu",
      "image":"https://m.media-amazon.com/images/I/61isRprUQ+L.jpg",
      "author":"Vaikom Muhammad Basheer",
      "language":"Malayalam"
    },
    {
      "title":"Wings Of Fire",
      "image":"https://m.media-amazon.com/images/I/71KKZlVjbwL.jpg",
      "author":"A P J Abdul Kalam",
      "language":"English"
    },
    {
      "title":"My Experiments With Truth",
      "image":"https://m.media-amazon.com/images/I/51GtJOp1OtL.jpg",
      "author":"M.K.Gandh",
      "language":"English"
    },
    {
      "title":"My Story",
      "image":"https://upload.wikimedia.org/wikipedia/en/4/46/My_Story_Kamala_Das.jpeg",
      "author":"Kmala Das",
      "language":"English"
    },
    {
      "title":"Khasakkinte Ithihasam",
      "image":"https://i1.sndcdn.com/artworks-000190305150-obffpa-t500x500.jpg",
      "author":"VO.V.Vijayan",
      "language":"Malayalam"
    },
    {
      "title":"Ikigai",
      "image":"https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
      "author":"Hector Gracia",
      "language":"English"
    },
    {
      "title":"It End With Us",
      "image":"https://m.media-amazon.com/images/I/71C0gE7b0XL.jpg",
      "author":"Colleen Hoover",
      "language":"English"
    },
    {
      "title":"I Too Had A Love Story",
      "image":"https://m.media-amazon.com/images/I/81fxf8EaTgL.jpg",
      "author":"Ravinder Singh",
      "language":"English"
    },
    {
      "title":"Ikigai",
      "image":"https://m.media-amazon.com/images/I/81FummIc2eL.jpg",
      "author":"Colleen Hoover",
      "language":"English"
    }
  ]

}
