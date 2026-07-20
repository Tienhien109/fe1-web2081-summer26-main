import { Component } from "@angular/core";
import { StoryService } from "../../services/story.service";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-add-story",
  imports: [ReactiveFormsModule],
  templateUrl: "./add-story.html",
  styleUrl: "./add-story.css",
})
export class AddStory {
  addForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      title: ["", Validators.required],
      author: [""],
      views: [0],
    });
  }

  submitForm() {
    if (this.addForm.invalid) {
      return;
    }

    console.log(this.addForm.value);
  }
}