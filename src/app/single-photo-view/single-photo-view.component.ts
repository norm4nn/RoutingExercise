import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService, Photo, Post } from '../config.service';

@Component({
  selector: 'app-single-photo-view',
  templateUrl: './single-photo-view.component.html',
  styleUrls: ['./single-photo-view.component.css']
})
export class SinglePhotoViewComponent implements OnInit {

  constructor(private service: ConfigService, private route: ActivatedRoute) { }
  photo!: Photo;
  private routeSub!: Subscription;
  private id!: number;
  ngOnInit(): void {
    // this.route
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.service.getPhotos().subscribe({
      next: data => this.photo = data[this.id],
      error: err => console.log("Nie udało się pobrac zdjęcia.")
    });
  }


}
