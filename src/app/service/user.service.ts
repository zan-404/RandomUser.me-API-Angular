import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"
import { observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }

  url:any= "https://randomuser.me/api";

  getUser()
  {
    return this.http.get(this.url)
  }
}
