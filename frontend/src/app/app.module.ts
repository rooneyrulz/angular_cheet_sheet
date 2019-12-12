import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatCardModule, MatGridListModule, MatButtonModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule, RoutingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PostItemComponent } from './components/post-item/post-item.component';
import { HeaderComponent } from './layouts/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    PostItemComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
