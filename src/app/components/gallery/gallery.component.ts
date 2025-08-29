import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryItemComponent } from '../gallery-item/gallery-item.component';
import { GalleryItem } from '../../models/gallery-item.interface';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, GalleryItemComponent],
  template: `
    <section class="gallery-section" role="main" aria-label="Interactive sound gallery">
      <div class="gallery-header">
        <h1 class="gallery-main-title">
          🎵 Magic Sound Gallery 🎨
        </h1>
        <p class="gallery-subtitle">
          Hover over the pictures to hear amazing sounds!
        </p>
      </div>
      
      <div class="gallery-grid" role="grid" aria-label="Gallery of images with sounds">
        <app-gallery-item 
          *ngFor="let item of galleryItems; trackBy: trackByItemId"
          [item]="item"
          role="gridcell">
        </app-gallery-item>
      </div>
    </section>
  `,
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  galleryItems: GalleryItem[] = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/id/237/300/200',
      soundUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      title: 'Cute Puppy',
      description: 'Adorable black puppy with sweet eyes'
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/id/238/300/200',
      soundUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      title: 'Forest Path',
      description: 'Peaceful forest trail with green trees'
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/id/239/300/200',
      soundUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      title: 'Ocean Waves',
      description: 'Beautiful ocean waves on sandy beach'
    },
    {
      id: 4,
      imageUrl: 'https://picsum.photos/id/240/300/200',
      soundUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      title: 'Mountain View',
      description: 'Stunning mountain landscape with clouds'
    },
    {
      id: 5,
      imageUrl: 'https://picsum.photos/id/241/300/200',
      soundUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
      title: 'City Lights',
      description: 'Colorful city skyline at night'
    },
    {
      id: 6,
      imageUrl: 'https://picsum.photos/id/242/300/200',
      soundUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
      title: 'Flower Garden',
      description: 'Bright colorful flowers in bloom'
    },
    {
      id: 7,
      imageUrl: 'https://picsum.photos/id/243/300/200',
      soundUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
      title: 'Sunset Sky',
      description: 'Beautiful orange and pink sunset'
    },
    {
      id: 8,
      imageUrl: 'https://picsum.photos/id/244/300/200',
      soundUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
      title: 'Autumn Leaves',
      description: 'Golden autumn leaves on trees'
    },
    {
      id: 9,
      imageUrl: 'https://picsum.photos/id/245/300/200',
      soundUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
      title: 'Starry Night',
      description: 'Twinkling stars in dark blue sky'
    },
    {
      id: 10,
      imageUrl: 'https://picsum.photos/id/246/300/200',
      soundUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
      title: 'Rainbow Bridge',
      description: 'Colorful rainbow over green landscape'
    }
  ];

  trackByItemId(index: number, item: GalleryItem): number {
    return item.id;
  }
}