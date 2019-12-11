import { Component, OnInit } from "@angular/core";

import { PostService } from "../../services/post.service";
import { Post } from "../../../model/Post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  postList: Post[] = [];
  constructor(private service: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.service.getPost().subscribe((data: Post[]) => {
      console.log(data);
      this.postList = [...data];
    });
  }
}
