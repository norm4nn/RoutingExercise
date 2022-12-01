import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PhotosViewComponent } from './photos-view/photos-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { SinglePhotoViewComponent } from './single-photo-view/single-photo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsViewComponent,
    PhotosViewComponent,
    HomeViewComponent,
    SinglePhotoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
