import { Component , OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { UserService } from './service/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'name-card';

  user:any;

  constructor( private toastr:ToastrService , private UserService:UserService){}

  ngOnInit(){
    this.UserService.getUser().subscribe(
      (user:any)=>
      {
        console.log(user)
        this.user = user.results[0]
        console.table(this.user)
      },
      (err)=>
      {
        this.toastr.error(err.status,"Oops Api Problem ")
      }
    )
  }

}
