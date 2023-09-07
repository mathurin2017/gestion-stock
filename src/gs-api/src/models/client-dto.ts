/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { CommandeClientDto } from './commande-client-dto';
export interface ClientDto {
  adresseDto?: AdresseDto;
  commandeClientDtos?: Array<CommandeClientDto>;
  email?: string;
  id?: number;
  nom?: string;
  numeroTelephone?: string;
  photo?: string;
  prenom?: string;
}
