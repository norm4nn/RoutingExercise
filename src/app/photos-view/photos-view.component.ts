import { Component, OnInit } from '@angular/core';
import { ConfigService, Photo } from '../config.service';

@Component({
  selector: 'app-photos-view',
  templateUrl: './photos-view.component.html',
  styleUrls: ['./photos-view.component.css']
})
export class PhotosViewComponent implements OnInit {
  photos!: Photo[];
  index!: number;
  constructor(private service: ConfigService) { }

  ngOnInit(): void {
    this.service.getPhotos().subscribe({
      next: data => this.photos = data.slice(0,200),
      error: err => console.log("Wystąpił błąd przy pobieraniu danych z JSON.", err),
    });
  }

  getIndex(i: number) {
    this.index = i;
  }
}
