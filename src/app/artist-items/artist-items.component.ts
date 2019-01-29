import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html',
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['artist']
 //  inputs:['artist'];
 // @Input[]
   })
export class ArtistItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
