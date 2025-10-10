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

import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs'

export interface MediaItem {
  id: number;
  title: string;
  description: string;
  mediaType: 'video' | 'image' | 'article';
  datePublished: string;
}

@Injectable({
  providedIn: 'root'
})
export class MediaDataService {

  private mockMediaData: MediaItem[] = [
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
    console.log('[MediaDataService] Initialized Successfully.');
  }

  getMockMedia(): Observable<MediaItem[]> {
    console.log('[MediaDataService] Fetching Mock Media Data...');
    return of(this.mockMediaData);
  }
}