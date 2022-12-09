import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Navbar1Component } from './navbar1/navbar1.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserSearchComponent } from './user-search/user-search.component';


const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"register",
    component:UserRegisterComponent
  },
  {
    path:"login",
    component:UserLoginComponent
  },
  {
    path:"entry",
    component:BookEntryComponent
  },
  {
    path:"view",
    component:ViewBookComponent
  },
  {
    path:"search",
    component:SearchBookComponent
  },
  {
    path:"delete",
    component:DeleteBookComponent
  },
  {
    path:"edit",
    component:EditBookComponent
  },
  {
    path:"issue",
    component:IssueBookComponent
  },
  {
    path:"usersearch",
    component:UserSearchComponent
  },
  {
    path:"userview",
    component:UserViewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserRegisterComponent,
    UserLoginComponent,
    BookEntryComponent,
    ViewBookComponent,
    SearchBookComponent,
    DeleteBookComponent,
    EditBookComponent,
    IssueBookComponent,
    NavbarComponent,
    Navbar1Component,
    UserViewComponent,
    UserSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
