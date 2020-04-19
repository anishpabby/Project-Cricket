import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data-store.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(private dataservice : DataService) { }

  ngOnInit() {
  }
}
