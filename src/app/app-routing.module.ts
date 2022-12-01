import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { PhotosViewComponent } from './photos-view/photos-view.component';
import { PostsViewComponent } from './posts-view/posts-view.component';
import { SinglePhotoViewComponent } from './single-photo-view/single-photo-view.component';

export const routes: Routes = [
  
  
  {path: 'home', component: HomeViewComponent},
  {path: 'photos', component: PhotosViewComponent},
  {path: 'photos/:id', component: SinglePhotoViewComponent},
  {path: 'posts', component: PostsViewComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
