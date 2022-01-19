import {Component, OnInit} from '@angular/core';
import {Post} from "../../../models/post";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Status} from "../../../models/status";
import {StatusService} from "../../../services/status-service/status.service";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  // @ts-ignore
  post: Post;
  status: Status[] = [];

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private statusService: StatusService,
              private router: Router) {
  }

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
    this.activatedRoute.paramMap.subscribe(paramap => {
      const id = paramap.get('id')
      console.log(id);
      // @ts-ignore
      this.postService.getPostById(id).subscribe(result => {
        this.post = result;
        console.log(result)
      }, error => {
        console.log(error);
      })
    })

  }

  updatePost() {
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
    this.postService.updatePost(this.post.id, post).subscribe(() => {
      alert("Thành công!")
      this.router.navigate([""]);
    })
  }

}
