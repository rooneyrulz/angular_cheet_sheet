import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostComponent } from "./pages/post/post.component";
import { PostDetailComponent } from "./pages/post-detail/post-detail.component";

const routes: Routes = [
  {
    path: "posts",
    component: PostComponent,
    pathMatch: "full"
  },
  {
    path: "posts/:id",
    component: PostDetailComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponents = [PostComponent, PostDetailComponent];
