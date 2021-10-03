import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { ContentfulImage } from '../../models/contentful-image';
import { ContentfulService } from '../../contentful.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() contentfulImage: ContentfulImage | undefined;
  @Input() canFocus: boolean = false;

  constructor(private dialog: MatDialog, private contentfulService: ContentfulService) { }

  ngOnInit(): void {
  }

  getImageUrl(): string {
    return this.contentfulService.getImageUrl(this.contentfulImage, '');
  }

  onClicked(){
    if(!this.canFocus) return;
    this.dialog.open(ImageDialogComponent, {
      data: this.contentfulImage
    })
  }

}
