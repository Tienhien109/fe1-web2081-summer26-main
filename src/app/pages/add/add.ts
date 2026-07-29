import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule],
  templateUrl: './add.html'
})
export class AddComponent {

  fb = inject(FormBuilder);

  router = inject(Router);

  storyService = inject(StoryService);

  form = this.fb.group({
    title:[''],
    author:[''],
    views:[0]
  });

  submit(){

    this.storyService.addStory(this.form.value).subscribe(()=>{

      this.router.navigate(["/"]);

    });

  }

}