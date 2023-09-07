/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { UtilisateurDto } from './utilisateur-dto';
export interface EntrepriseDto {
  adresseDto?: AdresseDto;
  codeFiscal?: string;
  description?: string;
  email?: string;
  id?: number;
  nom?: string;
  numeroTelephone?: string;
  photo?: string;
  siteWeb?: string;
  utilisateurDtos?: Array<UtilisateurDto>;
}
