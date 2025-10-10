import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaDataService, MediaItem} from '../../services/media-data.service';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-list.component.html',
  styleUrl: './media-list.component.css'
})
export class MediaListComponent implements OnInit {
  mediaItems: MediaItem[] = [];

  constructor(private mediaService: MediaDataService) {}

  ngOnInit(): void {
    this.mediaService.getMockMedia().subscribe({
      next: (data) => {
        this.mediaItems = data;
        console.log('[MediaListComponent] Received Data: ', data);
      },
      error: (err) => console.error('Error Fetching Data: ', err)
    });
  }
}
