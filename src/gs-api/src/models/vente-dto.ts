/* tslint:disable */
import { LigneVenteDto } from './ligne-vente-dto';
export interface VenteDto {
  code?: string;
  commentaire?: string;
  dateVente?: number;
  id?: number;
  ligneVenteDtos?: Array<LigneVenteDto>;
}
