/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { CommandeFournisseurDto } from './commande-fournisseur-dto';
export interface FournisseurDto {
  adresseDto?: AdresseDto;
  commandeFournisseurDtos?: Array<CommandeFournisseurDto>;
  email?: string;
  id?: number;
  nom?: string;
  numeroTelephone?: string;
  photo?: string;
  prenom?: string;
}
