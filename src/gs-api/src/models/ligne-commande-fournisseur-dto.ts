/* tslint:disable */
import { ArticleDto } from './article-dto';
import { CommandeFournisseurDto } from './commande-fournisseur-dto';
export interface LigneCommandeFournisseurDto {
  articleDto?: ArticleDto;
  commandeFournisseurDto?: CommandeFournisseurDto;
  id?: number;
  idEntreprise?: string;
  prixUnitaire?: number;
  quantite?: number;
}
