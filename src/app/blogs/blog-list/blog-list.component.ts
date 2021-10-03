import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../contentful.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogPosts: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.contentfulService
      .getEntries('blogPost')
      .then((blogPosts) => {
        this.blogPosts = blogPosts;
        console.log(blogPosts);
      });
  }

  getThumbnail(blogPost: Entry<any>){
    return this.contentfulService.getImageUrl(blogPost.fields.photos[0].fields, '?w=100&h=100');
  }


}
