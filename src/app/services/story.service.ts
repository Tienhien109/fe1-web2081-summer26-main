import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class StoryService {
  api = "http://localhost:3000/stories";

  constructor(private http: HttpClient) {}

  getStories() {
    return this.http.get(this.api);
  }

  addStory(story: any) {
    return this.http.post(this.api, story);
  }
}