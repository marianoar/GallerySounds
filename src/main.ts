import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { GalleryComponent } from './app/components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GalleryComponent],
  template: `
    <app-gallery></app-gallery>
  `
})
export class App {}

bootstrapApplication(App, {
  providers: []
});