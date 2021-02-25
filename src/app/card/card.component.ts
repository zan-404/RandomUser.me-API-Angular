import { Component, OnInit ,Input} from '@angular/core';
import {faEnvelope , faMapMarkedAlt , faPhone , faDatabase , faLocationArrow , faAddressBook} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  faEnvelope = faEnvelope;
  faMapMarkedAlt = faMapMarkedAlt;
  faPhone = faPhone;
  faDatabase = faDatabase;
  faLocationArrow =faLocationArrow;
  faAddressBook =faAddressBook;
  
  @Input() user;

  constructor() { }
  
  ngOnInit(): void {
  }

  reload()
  {
    window.location.reload();
  }

}
