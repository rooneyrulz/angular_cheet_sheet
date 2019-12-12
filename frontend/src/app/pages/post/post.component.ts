import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import { PostService } from "../../services/post.service";
import { Post } from "../../../model/Post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  postList: Post[] = [];
  constructor(
    private readonly service: PostService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.service.getPosts().subscribe((data: Post[]) => {
      console.log(data);
      this.postList = [...data].slice(0, 10);
    });
  }

  viewDetail(id: string) {
    this.router.navigate(['posts', id]);
  }
}
