import {Component, OnInit} from '@angular/core';
import {Post} from "../../../models/post";
import {PostService} from "../../../services/post-service/post.service";
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
  currentStatus!: Status;

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private statusService: StatusService,
              private router: Router) {
  }

  postForm: FormGroup = this.fb.group({
    id: new FormControl(),
    createAt: new FormControl(),
    description: new FormControl(),
    content: new FormControl(),
    status_id: new FormControl(),
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
        console.log(result);
        this.postForm = new FormGroup({
          id: new FormControl(result.id),
          createAt: new FormControl(result.createAt),
          description: new FormControl(result.description),
          content: new FormControl(result.content),
          status_id: new FormControl(result.status?.id),
        });
      }, error => {
        console.log(error);
      })
    })
  }

  updatePost() {
    const post = {
      description: this.postForm.value.description,
      content: this.postForm.value.content,
      status: {
        id: this.postForm.value.status_id
      }
    }
    // if (post.status == null) {
    //   post.status = this.postForm.value.status.id
    // }
    // this.currentStatus = {id: post.status}
    // post.status = this.currentStatus;
    console.log(post);
    // @ts-ignore
    this.postService.updatePost(this.postForm.value.id, post).subscribe(() => {
      alert("Thành công!")
      this.router.navigate([""]);
    })
  }

}
