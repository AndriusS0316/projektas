import { Component, OnInit } from '@angular/core';
import {UZDUOTYS} from '../../duomenys';
import {Uzduotis} from '../../duomenu-tvarkymas';

@Component({
  selector: 'app-uzduotys',
  templateUrl: './uzduotys.component.html',
  styleUrls: ['./uzduotys.component.css']
})
export class UzduotysComponent implements OnInit {
  uzduotys: Uzduotis[] = UZDUOTYS;
  constructor() { }

  ngOnInit(): void {
  }

}
