/* tslint:disable */
import { ArticleDto } from './article-dto';
import { VenteDto } from './vente-dto';
export interface LigneVenteDto {
  articleDto?: ArticleDto;
  id?: number;
  idEntreprise?: string;
  prixUnitaire?: number;
  quantite?: number;
  venteDto?: VenteDto;
}
