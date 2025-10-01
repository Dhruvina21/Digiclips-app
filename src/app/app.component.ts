import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common'; // Import DOCUMENT and isPlatformBrowser
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/team-member-2/navigation/navigation.component';
import { SearchFormComponent } from "./components/team-member-3/search-form/search-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, SearchFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isDarkMode = false; // Used for UI state if needed, though the class controls the look

  // Inject PLATFORM_ID to check the environment, and DOCUMENT for safe DOM access
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document, // FIX: Use DOCUMENT token
    @Inject(PLATFORM_ID) private platformId: Object // Inject platform to check for browser
  ) {}

  ngOnInit() {
    // We only access localStorage and the body element if we are in a browser environment
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        // Apply class directly to the document body
        this.renderer.addClass(this.document.body, 'dark-theme');
      } else {
        // Ensure light mode is the default when no preference is saved
        this.renderer.removeClass(this.document.body, 'dark-theme');
      }
    }
  }
  
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    // We still check the platform, although this method is typically only called in the browser
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode) {
        this.renderer.addClass(this.document.body, 'dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        this.renderer.removeClass(this.document.body, 'dark-theme');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}