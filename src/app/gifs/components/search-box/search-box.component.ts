import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>; // ! es el not null operador

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag });
    console.log(5);
  }
}
