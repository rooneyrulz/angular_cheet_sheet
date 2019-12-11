import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Post } from "../../model/Post";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPost(): Observable<Post[]> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
      headers
    });
  }
}
