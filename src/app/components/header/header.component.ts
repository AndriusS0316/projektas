import { Component, OnInit, Input } from '@angular/core';
//import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
   title: string = 'projektas';
   //@Input() title: string;
  //@Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
