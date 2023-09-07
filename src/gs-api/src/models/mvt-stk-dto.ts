/* tslint:disable */
import { ArticleDto } from './article-dto';
export interface MvtStkDto {
  articleDto?: ArticleDto;
  dateMvt?: number;
  id?: number;
  idEntreprise?: string;
  quantite?: number;
  sourceMvtStk?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeMvtStk?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
