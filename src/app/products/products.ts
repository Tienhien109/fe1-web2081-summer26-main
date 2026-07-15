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

  private storyService = inject(StoryService);

  ngOnInit(): void {
    this.storyService.getStories().subscribe(data => {
      this.stories = data;
    });
  }
}