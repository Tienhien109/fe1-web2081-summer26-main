import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './edit.html'
})
export class EditComponent implements OnInit {

  route = inject(ActivatedRoute);

  router = inject(Router);

  fb = inject(FormBuilder);

  storyService = inject(StoryService);

  id = 0;

  form = this.fb.group({
    title:[''],
    author:[''],
    views:[0]
  });

  ngOnInit(): void {

    this.id = Number(this.route.snapshot.paramMap.get("id"));

    this.storyService.getStory(this.id).subscribe(data=>{

      this.form.patchValue(data);

    });

  }

  submit(){

    this.storyService.updateStory(this.id,this.form.value).subscribe(()=>{

      this.router.navigate(["/"]);

    });

  }

}