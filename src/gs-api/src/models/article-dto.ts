/* tslint:disable */
import { CategoryDto } from './category-dto';
import { LigneCommandeClientDto } from './ligne-commande-client-dto';
import { LigneCommandeFournisseurDto } from './ligne-commande-fournisseur-dto';
import { LigneVenteDto } from './ligne-vente-dto';
import { MvtStkDto } from './mvt-stk-dto';
export interface ArticleDto {
  categoryDto?: CategoryDto;
  code?: string;
  designation?: string;
  id?: number;
  ligneCommandeClientDtos?: Array<LigneCommandeClientDto>;
  ligneCommandeFournisseurDtos?: Array<LigneCommandeFournisseurDto>;
  ligneVenteDtos?: Array<LigneVenteDto>;
  mvtStkDtos?: Array<MvtStkDto>;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
