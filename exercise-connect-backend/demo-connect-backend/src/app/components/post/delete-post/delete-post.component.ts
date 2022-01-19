import {Component, OnInit} from '@angular/core';
import {Post} from "../../../models/post";
import {Status} from "../../../models/status";
import {PostService} from "../../../services/post-service/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {StatusService} from "../../../services/status-service/status.service";

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {
  // @ts-ignore
  post: Post;
  status: Status[] = [];

  constructor(private postService: PostService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private statusService: StatusService,
              private router: Router) {
  }

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

  deletePost() {
    if (confirm("Bạn có thật sự muốn xóa bài ?")) {
      // @ts-ignore
      this.postService.deletePost(this.post.id).subscribe(() => {
        alert("Thành công!")
        this.router.navigate([""]);
      })
    }
  }

}
