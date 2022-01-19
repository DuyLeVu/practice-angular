import { Component, OnInit } from '@angular/core';
import {Post} from "../../../models/post";
import {Status} from "../../../models/status";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {StatusService} from "../../../services/status-service/status.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  // @ts-ignore
  post: Post;
  status: Status[] = [];
  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private statusService: StatusService,
              private router: Router) { }
  postForm: FormGroup = this.fb.group({
    createAt: new FormControl(''),
    description: new FormControl(''),
    content: new FormControl(''),
    status_id: new FormControl(''),
  })
  ngOnInit(): void {
    this.statusService.getAll().subscribe(rs => {
      this.status = rs
      console.log(rs)
    });
  }

  createPost() {
    const post = {
      createAt: new Date(),
      description: this.postForm.value.description,
      content: this.postForm.value.content,
      status: {
        id: this.postForm.value.status_id
      }
    }
    console.log(post);
    // @ts-ignore
    this.postService.savePost(post).subscribe(() => {
      alert("Thành công!")
      this.router.navigate([""]);
    })
  }
}
