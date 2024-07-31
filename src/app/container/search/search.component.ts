import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  //   searchText: string = '';
  //   updateSearchtext(event: any) {
  //     this.searchText = event.target.value;
  //   }
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() sort: EventEmitter<string> = new EventEmitter<string>();

  onSearch(value: string): void {
    this.search.emit(value);
  }

  onSortChange(event: Event): void {
    const sortValue = (event.target as HTMLSelectElement).value;
    this.sort.emit(sortValue);
  }
}
