import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../contentful.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  blogPost: any;
  html: string = '';

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.contentfulService.getEntry(id).then((blogPost) => {
      this.blogPost = blogPost;
      console.log(blogPost);
      this.getHTML(blogPost);
    });
  }

  getHTML(blogPost: Entry<any>){
    this.html = this.contentfulService.getHTML(blogPost.fields.story);
  }

}
