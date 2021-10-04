import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../contentful.service';

@Component({
  selector: 'app-information-list',
  templateUrl: './information-list.component.html',
  styleUrls: ['./information-list.component.scss']
})
export class InformationListComponent implements OnInit {

  accessibilityInformationImages: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService
      .getEntries('accessibilityInformationImage')
      .then((accessibilityInformationImages) => {
        this.accessibilityInformationImages = accessibilityInformationImages;
        console.log(accessibilityInformationImages);
      });
  }

  getThumbnail(accessibilityInformationImage: Entry<any>){
    return this.contentfulService.getImageUrl(accessibilityInformationImage.fields.image.fields, '?w=100&h=100');
  }

}
