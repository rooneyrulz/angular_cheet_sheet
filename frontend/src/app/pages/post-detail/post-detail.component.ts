import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../../services/post.service';
import { Post } from '../../../model/Post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  private id: string;
  post: Post;

  constructor(
    private readonly service: PostService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
   }

  ngOnInit() {
    this.fetchPost();
  }

  fetchPost() {
    this.service.getPost(this.id).subscribe((data: Post) => {
      this.post = data;
    });
  }

  deletePost() {
    this.service.deletePost(this.id).subscribe(data => {
      this.router.navigate(['posts']);
    });
  }

}
