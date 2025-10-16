import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // needed for *ngfor
import { MediaDataService, MediaItem} from '../../services/media-data.service';   // imports the service and data interface

@Component
({
  selector: 'app-media-list',
  standalone: true,
  imports: [CommonModule],    // allows use of *ngFor
  templateUrl: './media-list.component.html',
  styleUrl: './media-list.component.css'
})
export class MediaListComponent implements OnInit
{
  mediaItems: MediaItem[] = [];   // will hold the data fetched from the service; initalized as an empty array

  constructor(private mediaService: MediaDataService) {}    // Auto injects the MediaDataService; can now be called with getMockMedia() anywhere in this component

  ngOnInit(): void    // runs onece after the component is initialized
  {
    this.mediaService.getMockMedia().subscribe    // calls getMockMedia(); returns an observable; .subscribe listens to the observable
    ({
      next: (data) => {     // next runs when data arrives
        this.mediaItems = data;     // stores into mediaItems
        console.log('[MediaListComponent] Received Data: ', data);    // console log success
      },
      error: (err) => console.error('Error Fetching Data: ', err)     // console log error
    });
  }
}