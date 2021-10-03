import { ContentfulFile } from './contentful-file';

export interface ContentfulImage {
  title: string;
  description?: string;
  file: ContentfulFile;
}
