import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
  searchForm = new FormGroup ({
    query: new FormControl('')
  });

  submitQuery() {
    console.log("Query: ", this.searchForm.value.query ?? '');
  }
}
