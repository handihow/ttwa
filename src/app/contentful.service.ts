import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import { environment } from '../environments/environment';
import { ContentfulImage } from './models/contentful-image';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken,
  });

  constructor() {}

  async getEntries(
    contentType: 'blogPost',
    query?: object
  ): Promise<Entry<any>[]> {
    const res = await this.cdaClient.getEntries(
      Object.assign(
        {
          content_type: contentType,
        },
        query
      )
    );
    return res.items;
  }

  async getEntry(entryId: string): Promise<Entry<any>> {
    const res = await this.cdaClient.getEntry(entryId);
    return res;
  }


  getImageUrl(media: ContentfulImage | undefined, queryStr: string){
    if(!media) {
      return 'https://via.placeholder.com/500x500.png?text=Tuurlijk+Toegankelijk';
    }
    return 'https:' + media.file.url + queryStr;
  }

  getHTML(rawHTML: any) {
    return documentToHtmlString(rawHTML);
  }

}
