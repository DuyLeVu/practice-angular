import { Component, OnInit } from '@angular/core';
import {Post} from "../../../models/post";
import {PostService} from "../../../services/post-service/post.service";
import {Status} from "../../../models/status";
import {StatusService} from "../../../services/status-service/status.service";

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.css']
})
export class ListStatusComponent implements OnInit {

  listStatus: Status[] = [];
  constructor(private statusService : StatusService) { }

  ngOnInit(): void {
    this.statusService.getAll().subscribe(result => {
      this.listStatus = result;
      console.log(result);
    }, error => {
      console.log(error)
    })
  }

}
