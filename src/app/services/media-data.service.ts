/**
 * MediaDataService
 * 
 * This service acts as a mock data provider for future API integrations.
 * It currently returns a static list of media items to simulate backend responses.
 * 
 * Usage:
 *    1. Import and inject into any component: constructor(private mediaData: MediaDataService) {}
 *    2. Call getMockMedia() to retrieve data.
 * 
 * Next Steps:
 *    1. Replace mock data with real HTTP calls once the backend API is ready.
 */

import { Injectable } from '@angular/core';   // provides decorator that marks a class as a service Angular can inject into other classes
import { Observable, of} from 'rxjs'          // "rxjx" = Angular's reactive programming library; Obervable = a stream of data you can subscribe to; of() = an observable that emits a value immediately (good for mock data)

// a TypeScript interface for the "MediaItem" data structure
export interface MediaItem {
  id: number;
  title: string;
  description: string;
  mediaType: 'video' | 'image' | 'article';
  datePublished: string;
}

@Injectable({           //
  providedIn: 'root'    //  These three lines mark this class as something Angular can inject elsewhere
})                      //

export class MediaDataService {       // the service class definition

  private mockMediaData: MediaItem[] = [    // a static array of sample media
    {
      id: 1,
      title: 'Title_Test_1',
      description: "Description_Test_1",
      mediaType: 'article',
      datePublished: '2025-10-01'
    },
    {
      id: 2,
      title: 'Title_Test_2',
      description: "Description_Test_2",
      mediaType: 'video',
      datePublished: '2025-10-02'
    },
    {
      id: 3,
      title: 'Title_Test_3',
      description: "Description_Test_3",
      mediaType: 'image',
      datePublished: '2025-10-01'
    }
  ];

  constructor() {
    console.log('[MediaDataService] Initialized Successfully.');    // debug log: checks successful initialization; only runs once when the service is first created
  }

  getMockMedia(): Observable<MediaItem[]> {     // a public method that returns an observable
    console.log('[MediaDataService] Fetching Mock Media Data...');    // logs to console
    return of(this.mockMediaData);      // wraps the static array in an Observable; real HTTP calls also returns Observables, so component code won't need to change.
  }
}