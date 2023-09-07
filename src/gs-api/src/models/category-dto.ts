/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface CategoryDto {
  articleDtos?: Array<ArticleDto>;
  code?: string;
  designation?: string;
  id?: number;
}
