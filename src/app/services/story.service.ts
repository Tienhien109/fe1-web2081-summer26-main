import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story } from '../../story';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  private http = inject(HttpClient);

  api = 'http://localhost:3000/stories';

  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.api);
  }
}