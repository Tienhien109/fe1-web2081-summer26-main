import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  http = inject(HttpClient);

  API = "http://localhost:3000/stories";

  getStories() {
    return this.http.get<any[]>(this.API);
  }

  getStory(id: number) {
    return this.http.get<any>(`${this.API}/${id}`);
  }

  addStory(data: any) {
    return this.http.post(this.API, data);
  }

  updateStory(id: number, data: any) {
    return this.http.put(`${this.API}/${id}`, data);
  }

  deleteStory(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }

}