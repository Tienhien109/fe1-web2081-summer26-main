import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryService } from '../services/story.service';
import { Story } from '../../story';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {

  stories: Story[] = [];

  loading = false;
  error = '';

  private storyService = inject(StoryService);

  ngOnInit(): void {

    this.loading = true;

    this.storyService.getStories().subscribe({
      next: (data: Story[] | any) => {
        this.stories = data as Story[];
        this.loading = false;
      },

      error: () => {
        this.error = 'Không tải được dữ liệu!';
        this.loading = false;
      }
    });

  }
}