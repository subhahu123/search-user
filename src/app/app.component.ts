import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Search for github users';
  user = {
    url: ""
  } ;
  getdata = (event: any) => {
    console.log(event.target.value) ;
    fetch(`https://api.github.com/users/${event.target.value}`).then( res => res.json() ).then( (data) => {
      console.log(data) ;
      this.user.url = data.avatar_url ;
      this.user.name = data.login ;
      console.log(this.user) ;
      console.log(this.user.url) ;
    })
  }
}
