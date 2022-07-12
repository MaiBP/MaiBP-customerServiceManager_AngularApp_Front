import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //property created
 enteredSearchValue: string = ''
 @Output()
 //custom event (import EventEmitter) type of data string and instanciate new event
 searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
//raise event passing the enteredSearchValue to the emit
//we want to call onSearchTextChanged method once user starts typing.
 onSearchTextChanged(){
   this.searchTextChanged.emit(this.enteredSearchValue)
 }
}
