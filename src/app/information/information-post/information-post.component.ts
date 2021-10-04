import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../contentful.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information-post',
  templateUrl: './information-post.component.html',
  styleUrls: ['./information-post.component.scss']
})
export class InformationPostComponent implements OnInit {

  accessibilityInformationImage: any;
  html: string = '';

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.contentfulService.getEntry(id).then((accessibilityInformationImage) => {
      this.accessibilityInformationImage = accessibilityInformationImage;
    });
  }

}
