import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="stories.length === 0">No stories.</div>
    <ul>
      <li *ngFor="let story of stories">
        {{ story.title }}
        <button type="button" (click)="delete(story.id)">Xóa</button>
      </li>
    </ul>
  `
})
export class ListComponent implements OnInit {

  storyService = inject(StoryService);

  stories: any[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.storyService.getStories().subscribe(data => {
      this.stories = data;
    });
  }

  delete(id: number) {
    if(confirm("Xóa?")){
      this.storyService.deleteStory(id).subscribe(()=>{
        this.loadData();
      })
    }
  }

}