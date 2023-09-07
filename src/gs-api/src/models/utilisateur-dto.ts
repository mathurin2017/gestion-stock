/* tslint:disable */
import { AdresseDto } from './adresse-dto';
import { EntrepriseDto } from './entreprise-dto';
import { RoleDto } from './role-dto';
export interface UtilisateurDto {
  adresseDto?: AdresseDto;
  dateDeNaissance?: number;
  email?: string;
  entrepriseDto?: EntrepriseDto;
  id?: number;
  motDePasse?: string;
  nom?: string;
  photo?: string;
  prenom?: string;
  roleDtos?: Array<RoleDto>;
}
