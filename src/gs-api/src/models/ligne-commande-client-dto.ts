/* tslint:disable */
import { ArticleDto } from './article-dto';
import { CommandeClientDto } from './commande-client-dto';
export interface LigneCommandeClientDto {
  articleDto?: ArticleDto;
  commandeClientDto?: CommandeClientDto;
  id?: number;
  idEntreprise?: string;
  prixUnitaire?: number;
  quantite?: number;
}
