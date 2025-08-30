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
          sprunki xd
        </h1>
        <p class="gallery-subtitle">
          
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
      imageUrl: 'assets/sonic.jpeg',
      soundUrl: 'assets/sonic.mpeg',
      title: 'sonic',
      description: 'Adorable black puppy with sweet eyes'
    },
    {
      id: 2,
      imageUrl: 'assets/alure.jpeg',
      soundUrl: 'assets/alure.mpeg',
      title: 'alure',
      description: 'Peaceful forest trail with green trees'
    },
    {
      id: 3,
      imageUrl: 'assets/aqua.jpeg',
      soundUrl: 'assets/aqua.mpeg',
      title: 'aqua',
      description: 'Beautiful ocean waves on sandy beach'
    },
    {
      id: 4,
      imageUrl: 'assets/computado.jpeg',
      soundUrl: 'assets/divertidaComputadora.mpeg',
      title: 'divertiComputer',
      description: 'Stunning mountain landscape with clouds'
    },
    {
      id: 5,
      imageUrl: 'assets/helmo.jpeg',
      soundUrl: 'assets/elmo.mpeg',
      title: 'elmo',
      description: 'Colorful city skyline at night'
    },
    // {
    //   id: 6,
    //   imageUrl: 'assets/fondo.jpeg',
    //   soundUrl: 'assets/fondo.mpeg',
    //   title: 'fondo',
    //   description: 'Bright colorful flowers in bloom'
    // },
    {
      id: 7,
      imageUrl: 'assets/michi.jpeg',
      soundUrl: 'assets/michi.mpeg',
      title: 'michi',
      description: 'Beautiful orange and pink sunset'
    },
    {
      id: 8,
      imageUrl: 'assets/pibby.jpeg',
      soundUrl: 'assets/pibby.mpeg',
      title: 'pibby',
      description: 'Golden autumn leaves on trees'
    },
    {
      id: 9,
      imageUrl: 'assets/spokyMonth.jpeg',
      soundUrl: 'assets/spokyMonth.mpeg',
      title: 'spokyMonth',
      description: 'Twinkling stars in dark blue sky'
    },
  ];

  trackByItemId(index: number, item: GalleryItem): number {
    return item.id;
  }
}