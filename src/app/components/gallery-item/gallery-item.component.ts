import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalleryItem } from "../../models/gallery-item.interface";

@Component({
  selector: "app-gallery-item",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="gallery-item"
      (mouseenter)="onHover()"
      (mouseleave)="onHoverEnd()"
      (click)="onClick()"
      [attr.aria-label]="'Gallery item: ' + item.title"
    >
      <div class="image-container">
        <img
          [src]="item.imageUrl"
          [alt]="item.description"
          class="gallery-image"
          loading="lazy"
        />

        <div
          class="sound-indicator"
          [class.active]="isPlaying"
          aria-hidden="true"
        >
          <div class="sound-wave"></div>
          <div class="sound-wave"></div>
          <div class="sound-wave"></div>
        </div>
      </div>

      <div class="gallery-controls">
        <h3 class="gallery-title">{{ item.title }}</h3>
        <!--       
          <button 
          class="play-button"
          (click)="togglePlay()"
          [attr.aria-label]="isPlaying ? 'Stop sound for ' + item.title : 'Play sound for ' + item.title"
          [class.playing]="isPlaying">
          <span class="play-icon" [class.playing]="isPlaying">
            {{ isPlaying ? '⏸️' : '▶️' }}
          </span>
          {{ isPlaying ? 'Stop' : 'Play' }}
        </button>-->
      </div>

      <audio
        #audioElement
        [src]="item.soundUrl"
        preload="metadata"
        loop
        (ended)="onAudioEnded()"
        (error)="onAudioError()"
      ></audio>
    </div>
  `,
  styleUrls: ["./gallery-item.component.scss"],
})
export class GalleryItemComponent implements OnDestroy {
  @Input() item!: GalleryItem;
  @ViewChild("audioElement") audioElement!: ElementRef<HTMLAudioElement>;

  isPlaying = false;
  isHovering = false;

  onHover() {
    this.isHovering = true;
    this.playAudio();
  }

  onHoverEnd() {
    // this.isHovering = false;
    // if (this.isPlaying && this.audioElement) {
    //   this.audioElement.nativeElement.pause();
    //   this.isPlaying = false;
    // }
  }

  togglePlay() {
    if (this.isPlaying) {
      this.stopAudio();
    } else {
      this.playAudio();
    }
  }

  private async playAudio() {
    if (!this.audioElement) return;

    try {
      const audio = this.audioElement.nativeElement;
      audio.currentTime = 0;
      await audio.play();
      this.isPlaying = true;
    } catch (error) {
      console.warn("Audio play failed:", error);
    }
  }

  private stopAudio() {
    if (!this.audioElement) return;

    const audio = this.audioElement.nativeElement;
    audio.pause();
    audio.currentTime = 0;
    this.isPlaying = false;
  }

  onAudioEnded() {
    this.isPlaying = false;
  }

  onAudioError() {
    console.warn("Audio loading failed for:", this.item.soundUrl);
    this.isPlaying = false;
  }

  ngOnDestroy() {
    this.stopAudio();
  }

  onClick(){
   if (this.isPlaying) {
      this.stopAudio();
    } else {
      this.playAudio();
    }
  }
}
