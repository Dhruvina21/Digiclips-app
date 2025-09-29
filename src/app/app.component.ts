import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchFormComponent } from "./components/team-member-3/search-form/search-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SearchFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digiclips-app';
}
