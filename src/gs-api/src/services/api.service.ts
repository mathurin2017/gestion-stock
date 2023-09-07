/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleDto } from '../models/article-dto';
import { LigneCommandeClientDto } from '../models/ligne-commande-client-dto';
import { AuthenticationResponse } from '../models/authentication-response';
import { CategoryDto } from '../models/category-dto';
import { ClientDto } from '../models/client-dto';
import { CommandeClientDto } from '../models/commande-client-dto';
import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { EntrepriseDto } from '../models/entreprise-dto';
import { FournisseurDto } from '../models/fournisseur-dto';
import { MvtStkDto } from '../models/mvt-stk-dto';
import { UtilisateurDto } from '../models/utilisateur-dto';
import { VenteDto } from '../models/vente-dto';
@Injectable({
  providedIn: 'root',
})
class ApiService extends __BaseService {
  static readonly savePath = '/articles';
  static readonly updatePath = '/articles';
  static readonly findHistoriqueCommandeClientPath = '/articles/historique/commandeClient/{idArticle}';
  static readonly findByIdPath = '/articles/{id}';
  static readonly authenticatePath = '/authenticate/create';
  static readonly findAllPath = '/categories';
  static readonly save_1Path = '/categories';
  static readonly update_1Path = '/categories';
  static readonly findById_1Path = '/categories/{id}';
  static readonly findAll_1Path = '/clients';
  static readonly save_2Path = '/clients';
  static readonly savePhotoPath = '/clients/photo/{id}/{title}';
  static readonly findById_2Path = '/clients/{id}';
  static readonly deletePath = '/clients/{id}';
  static readonly save_3Path = '/commandesClients';
  static readonly findAllLigneCommandeClientByCommandeClientIdPath = '/commandesClients/ligneCommandeClient/{idClient}';
  static readonly findByCodePath = '/commandesClients/{code}';
  static readonly deleteArticlePath = '/commandesClients/{idCommande}/{idLigneCommande}';
  static readonly findById_3Path = '/commandesClients/{id}';
  static readonly updateEtatPath = '/commandesClients/{id}/{etatCommande}';
  static readonly updateClientPath = '/commandesClients/{id}/{idClient}';
  static readonly save_4Path = '/commandesFournisseurs';
  static readonly update_2Path = '/commandesFournisseurs';
  static readonly findAllLigneCommandeFournisseurByCommandeFournisseurIdPath = '/commandesFournisseurs/ligneCommandeFournisseur/{idFournisseur}';
  static readonly updateArticlePath = '/commandesFournisseurs/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly findById_4Path = '/commandesFournisseurs/{id}';
  static readonly updateEtat_1Path = '/commandesFournisseurs/{id}/{etatCommande}';
  static readonly updateFournisseurPath = '/commandesFournisseurs/{id}/{idFournisseur}';
  static readonly findAll_2Path = '/entreprises';
  static readonly delete_1Path = '/entreprises/{id}';
  static readonly findAll_3Path = '/fournisseurs';
  static readonly findById_5Path = '/fournisseurs/{id}';
  static readonly mvtStkArticlePath = '/mvtStks/article/{idArticle}';
  static readonly correctionStockNegativePath = '/mvtStks/correctionNegative';
  static readonly correctionStockPositivePath = '/mvtStks/correctionPositive';
  static readonly stockReelArticlePath = '/mvtStks/stockReel/{idArticle}';
  static readonly save_5Path = '/utilisateurs';
  static readonly findById_6Path = '/utilisateurs/{id}';
  static readonly findAll_4Path = '/ventes';
  static readonly save_6Path = '/ventes';
  static readonly update_3Path = '/ventes';
  static readonly findById_7Path = '/ventes/{id}';
  static readonly delete_2Path = '/ventes/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Enregistrer un article
   *
   * Cette méthode permet d'enregistrer un article
   * @return L'objet article est crée
   */
  saveResponse(): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/articles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Enregistrer un article
   *
   * Cette méthode permet d'enregistrer un article
   * @return L'objet article est crée
   */
  save(): __Observable<ArticleDto> {
    return this.saveResponse().pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Modifier un article
   *
   * Cette méthode permet de modifier un article
   * @return L'objet article est modifié
   */
  updateResponse(): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/articles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Modifier un article
   *
   * Cette méthode permet de modifier un article
   * @return L'objet article est modifié
   */
  update(): __Observable<ArticleDto> {
    return this.updateResponse().pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Renvoi la liste des commandes de clients par article
   *
   * Cette méthode permet de rechercher et renvoyer la liste des commandes de clients par article
   * @return successful operation
   */
  findHistoriqueCommandeClientResponse(): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/articles/historique/commandeClient/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des commandes de clients par article
   *
   * Cette méthode permet de rechercher et renvoyer la liste des commandes de clients par article
   * @return successful operation
   */
  findHistoriqueCommandeClient(): __Observable<Array<LigneCommandeClientDto>> {
    return this.findHistoriqueCommandeClientResponse().pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * Rechercher un article
   *
   * Cette méthode permet de rechercher un article par son ID
   * @return L'article a été trouvé dans la BDD
   */
  findByIdResponse(): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/articles/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ArticleDto>;
      })
    );
  }
  /**
   * Rechercher un article
   *
   * Cette méthode permet de rechercher un article par son ID
   * @return L'article a été trouvé dans la BDD
   */
  findById(): __Observable<ArticleDto> {
    return this.findByIdResponse().pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Authentification token
   *
   * Cette méthode d'authentifier et de recupérer un token
   * @return L'objet authenticationRequest est crée
   */
  authenticateResponse(): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/authenticate/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }
  /**
   * Authentification token
   *
   * Cette méthode d'authentifier et de recupérer un token
   * @return L'objet authenticationRequest est crée
   */
  authenticate(): __Observable<AuthenticationResponse> {
    return this.authenticateResponse().pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }

  /**
   * Renvoi la liste des catégories
   *
   * Cette méthode permet de rechercher et renvoyer la liste des catégories
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CategoryDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des catégories
   *
   * Cette méthode permet de rechercher et renvoyer la liste des catégories
   * @return successful operation
   */
  findAll(): __Observable<Array<CategoryDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CategoryDto>)
    );
  }

  /**
   * Enregistrer une catégorie
   *
   * Cette méthode permet d'enregistrer une catégorie
   * @return L'objet categorie est crée
   */
  save_1Response(): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Enregistrer une catégorie
   *
   * Cette méthode permet d'enregistrer une catégorie
   * @return L'objet categorie est crée
   */
  save_1(): __Observable<CategoryDto> {
    return this.save_1Response().pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Modifier une catégorie
   *
   * Cette méthode permet de modifier une catégorie
   * @return L'objet categorie est modifié
   */
  update_1Response(): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/categories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Modifier une catégorie
   *
   * Cette méthode permet de modifier une catégorie
   * @return L'objet categorie est modifié
   */
  update_1(): __Observable<CategoryDto> {
    return this.update_1Response().pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Rechercher une catégorie
   *
   * Cette méthode permet de rechercher une catégorie par son ID
   * @return La catégorie a été trouvée dans la BDD
   */
  findById_1Response(): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/categories/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CategoryDto>;
      })
    );
  }
  /**
   * Rechercher une catégorie
   *
   * Cette méthode permet de rechercher une catégorie par son ID
   * @return La catégorie a été trouvée dans la BDD
   */
  findById_1(): __Observable<CategoryDto> {
    return this.findById_1Response().pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Renvoi la liste des clients
   *
   * Cette méthode permet de rechercher et renvoyer la liste des clients
   * @return successful operation
   */
  findAll_1Response(): __Observable<__StrictHttpResponse<Array<ClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/clients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ClientDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des clients
   *
   * Cette méthode permet de rechercher et renvoyer la liste des clients
   * @return successful operation
   */
  findAll_1(): __Observable<Array<ClientDto>> {
    return this.findAll_1Response().pipe(
      __map(_r => _r.body as Array<ClientDto>)
    );
  }

  /**
   * Enregistrer un client
   *
   * Cette méthode permet d'enregistrer un client
   * @return L'objet client est crée
   */
  save_2Response(): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/clients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Enregistrer un client
   *
   * Cette méthode permet d'enregistrer un client
   * @return L'objet client est crée
   */
  save_2(): __Observable<ClientDto> {
    return this.save_2Response().pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * Enregistrer une photo client
   *
   * Cette méthode permet d'enregistrer une photo client
   * @return L'objet client est crée
   */
  savePhotoResponse(): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/clients/photo/${encodeURIComponent(String(id))}/${encodeURIComponent(String(title))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Enregistrer une photo client
   *
   * Cette méthode permet d'enregistrer une photo client
   * @return L'objet client est crée
   */
  savePhoto(): __Observable<ClientDto> {
    return this.savePhotoResponse().pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * Rechercher un client
   *
   * Cette méthode permet de rechercher un client par son ID
   * @return Le client a été trouvé dans la BDD
   */
  findById_2Response(): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/clients/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClientDto>;
      })
    );
  }
  /**
   * Rechercher un client
   *
   * Cette méthode permet de rechercher un client par son ID
   * @return Le client a été trouvé dans la BDD
   */
  findById_2(): __Observable<ClientDto> {
    return this.findById_2Response().pipe(
      __map(_r => _r.body as ClientDto)
    );
  }

  /**
   * Rechercher un client
   *
   * Cette méthode permet de supprimer un client par ID
   * @return successful operation
   */
  deleteResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/clients/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Rechercher un client
   *
   * Cette méthode permet de supprimer un client par ID
   * @return successful operation
   */
  delete(): __Observable<{}> {
    return this.deleteResponse().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Enregistrer une commande client
   *
   * Cette méthode permet d'enregistrer une commande client
   * @return L'objet commande client est crée
   */
  save_3Response(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/commandesClients`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * Enregistrer une commande client
   *
   * Cette méthode permet d'enregistrer une commande client
   * @return L'objet commande client est crée
   */
  save_3(): __Observable<CommandeClientDto> {
    return this.save_3Response().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Renvoi la liste des lignes de commandes d'un client
   *
   * Cette méthode permet de rechercher et renvoyer la liste des lignes de commandes d'un client
   * @return successful operation
   */
  findAllLigneCommandeClientByCommandeClientIdResponse(): __Observable<__StrictHttpResponse<Array<LigneCommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/commandesClients/ligneCommandeClient/${encodeURIComponent(String(idClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeClientDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des lignes de commandes d'un client
   *
   * Cette méthode permet de rechercher et renvoyer la liste des lignes de commandes d'un client
   * @return successful operation
   */
  findAllLigneCommandeClientByCommandeClientId(): __Observable<Array<LigneCommandeClientDto>> {
    return this.findAllLigneCommandeClientByCommandeClientIdResponse().pipe(
      __map(_r => _r.body as Array<LigneCommandeClientDto>)
    );
  }

  /**
   * Rechercher une commande client
   *
   * Cette méthode permet de rechercher une commande client par son CODE
   * @return La commande client a été trouvée dans la BDD
   */
  findByCodeResponse(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/commandesClients/${encodeURIComponent(String(code))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * Rechercher une commande client
   *
   * Cette méthode permet de rechercher une commande client par son CODE
   * @return La commande client a été trouvée dans la BDD
   */
  findByCode(): __Observable<CommandeClientDto> {
    return this.findByCodeResponse().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Rechercher une commande client
   *
   * Cette méthode permet de supprimer une commande client par ID
   * @return successful operation
   */
  deleteArticleResponse(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/commandesClients/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idLigneCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * Rechercher une commande client
   *
   * Cette méthode permet de supprimer une commande client par ID
   * @return successful operation
   */
  deleteArticle(): __Observable<CommandeClientDto> {
    return this.deleteArticleResponse().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Rechercher une commande client
   *
   * Cette méthode permet de rechercher une commande client par son ID
   * @return La commande client a été trouvée dans la BDD
   */
  findById_3Response(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/commandesClients/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * Rechercher une commande client
   *
   * Cette méthode permet de rechercher une commande client par son ID
   * @return La commande client a été trouvée dans la BDD
   */
  findById_3(): __Observable<CommandeClientDto> {
    return this.findById_3Response().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Modifier l'état de la commande client
   *
   * Cette méthode permet de modifier l'état d'une commande client
   * @return L'objet commande client est modifié
   */
  updateEtatResponse(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/commandesClients/${encodeURIComponent(String(id))}/${encodeURIComponent(String(etatCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * Modifier l'état de la commande client
   *
   * Cette méthode permet de modifier l'état d'une commande client
   * @return L'objet commande client est modifié
   */
  updateEtat(): __Observable<CommandeClientDto> {
    return this.updateEtatResponse().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Modifier le client de la commande client
   *
   * Cette méthode permet de modifier le client d'une commande client
   * @return L'objet commande client est modifié
   */
  updateClientResponse(): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/commandesClients/${encodeURIComponent(String(id))}/${encodeURIComponent(String(idClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeClientDto>;
      })
    );
  }
  /**
   * Modifier le client de la commande client
   *
   * Cette méthode permet de modifier le client d'une commande client
   * @return L'objet commande client est modifié
   */
  updateClient(): __Observable<CommandeClientDto> {
    return this.updateClientResponse().pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Enregistrer une commande fournisseur
   *
   * Cette méthode permet d'enregistrer une commande fournisseur
   * @return L'objet commande fournisseur est crée
   */
  save_4Response(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/commandesFournisseurs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Enregistrer une commande fournisseur
   *
   * Cette méthode permet d'enregistrer une commande fournisseur
   * @return L'objet commande fournisseur est crée
   */
  save_4(): __Observable<CommandeFournisseurDto> {
    return this.save_4Response().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Modifier une commande fournisseur
   *
   * Cette méthode permet de modifier une commande fournisseur
   * @return L'objet commande fournisseur est modifié
   */
  update_2Response(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/commandesFournisseurs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Modifier une commande fournisseur
   *
   * Cette méthode permet de modifier une commande fournisseur
   * @return L'objet commande fournisseur est modifié
   */
  update_2(): __Observable<CommandeFournisseurDto> {
    return this.update_2Response().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Renvoi la liste des lignes de commandes d'un fournisseur
   *
   * Cette méthode permet de rechercher et renvoyer la liste des lignes de commandes d'un fournisseur
   * @return successful operation
   */
  findAllLigneCommandeFournisseurByCommandeFournisseurIdResponse(): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/commandesFournisseurs/ligneCommandeFournisseur/${encodeURIComponent(String(idFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des lignes de commandes d'un fournisseur
   *
   * Cette méthode permet de rechercher et renvoyer la liste des lignes de commandes d'un fournisseur
   * @return successful operation
   */
  findAllLigneCommandeFournisseurByCommandeFournisseurId(): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findAllLigneCommandeFournisseurByCommandeFournisseurIdResponse().pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * Modifier l'article de la commande fournisseur
   *
   * Cette méthode permet de modifier l'article d'une commande fournisseur
   * @return L'objet commande fournisseur est modifié
   */
  updateArticleResponse(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/commandesFournisseurs/${encodeURIComponent(String(idCommande))}/${encodeURIComponent(String(idLigneCommande))}/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Modifier l'article de la commande fournisseur
   *
   * Cette méthode permet de modifier l'article d'une commande fournisseur
   * @return L'objet commande fournisseur est modifié
   */
  updateArticle(): __Observable<CommandeFournisseurDto> {
    return this.updateArticleResponse().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Rechercher une commande fournisseur
   *
   * Cette méthode permet de rechercher une commande fournisseur par son ID
   * @return La commande fournisseur a été trouvée dans la BDD
   */
  findById_4Response(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/commandesFournisseurs/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Rechercher une commande fournisseur
   *
   * Cette méthode permet de rechercher une commande fournisseur par son ID
   * @return La commande fournisseur a été trouvée dans la BDD
   */
  findById_4(): __Observable<CommandeFournisseurDto> {
    return this.findById_4Response().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Modifier l'état de la commande fournisseur
   *
   * Cette méthode permet de modifier l'état d'une commande fournisseur
   * @return L'objet commande fournisseur est modifié
   */
  updateEtat_1Response(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/commandesFournisseurs/${encodeURIComponent(String(id))}/${encodeURIComponent(String(etatCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Modifier l'état de la commande fournisseur
   *
   * Cette méthode permet de modifier l'état d'une commande fournisseur
   * @return L'objet commande fournisseur est modifié
   */
  updateEtat_1(): __Observable<CommandeFournisseurDto> {
    return this.updateEtat_1Response().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Modifier le fournisseur de la commande fournisseur
   *
   * Cette méthode permet de modifier le fournisseur d'une commande fournisseur
   * @return L'objet commande fournisseur est modifié
   */
  updateFournisseurResponse(): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/commandesFournisseurs/${encodeURIComponent(String(id))}/${encodeURIComponent(String(idFournisseur))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommandeFournisseurDto>;
      })
    );
  }
  /**
   * Modifier le fournisseur de la commande fournisseur
   *
   * Cette méthode permet de modifier le fournisseur d'une commande fournisseur
   * @return L'objet commande fournisseur est modifié
   */
  updateFournisseur(): __Observable<CommandeFournisseurDto> {
    return this.updateFournisseurResponse().pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Renvoi la liste des entreprises
   *
   * Cette méthode permet de rechercher et renvoyer la liste des entreprises
   * @return successful operation
   */
  findAll_2Response(): __Observable<__StrictHttpResponse<Array<EntrepriseDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/entreprises`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<EntrepriseDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des entreprises
   *
   * Cette méthode permet de rechercher et renvoyer la liste des entreprises
   * @return successful operation
   */
  findAll_2(): __Observable<Array<EntrepriseDto>> {
    return this.findAll_2Response().pipe(
      __map(_r => _r.body as Array<EntrepriseDto>)
    );
  }

  /**
   * Rechercher une entreprise
   *
   * Cette méthode permet de supprimer une entreprise par ID
   * @return successful operation
   */
  delete_1Response(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/entreprises/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Rechercher une entreprise
   *
   * Cette méthode permet de supprimer une entreprise par ID
   * @return successful operation
   */
  delete_1(): __Observable<{}> {
    return this.delete_1Response().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Renvoi la liste des fournisseurs
   *
   * Cette méthode permet de rechercher et renvoyer la liste des fournisseurs
   * @return successful operation
   */
  findAll_3Response(): __Observable<__StrictHttpResponse<Array<FournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/fournisseurs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FournisseurDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des fournisseurs
   *
   * Cette méthode permet de rechercher et renvoyer la liste des fournisseurs
   * @return successful operation
   */
  findAll_3(): __Observable<Array<FournisseurDto>> {
    return this.findAll_3Response().pipe(
      __map(_r => _r.body as Array<FournisseurDto>)
    );
  }

  /**
   * Rechercher un fournisseur
   *
   * Cette méthode permet de rechercher un fournisseur par son ID
   * @return Le fournisseur a été trouvé dans la BDD
   */
  findById_5Response(): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/fournisseurs/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * Rechercher un fournisseur
   *
   * Cette méthode permet de rechercher un fournisseur par son ID
   * @return Le fournisseur a été trouvé dans la BDD
   */
  findById_5(): __Observable<FournisseurDto> {
    return this.findById_5Response().pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * Renvoi la liste des mvtStks id article
   *
   * Cette méthode permet de rechercher la liste des mvtStks par Article ID
   * @return successful operation
   */
  mvtStkArticleResponse(): __Observable<__StrictHttpResponse<Array<MvtStkDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/mvtStks/article/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<MvtStkDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des mvtStks id article
   *
   * Cette méthode permet de rechercher la liste des mvtStks par Article ID
   * @return successful operation
   */
  mvtStkArticle(): __Observable<Array<MvtStkDto>> {
    return this.mvtStkArticleResponse().pipe(
      __map(_r => _r.body as Array<MvtStkDto>)
    );
  }

  /**
   * Enregistrer une entrée mvtStk
   *
   * Cette méthode permet d'enregistrer une correction négative mvtStk
   * @return L'objet mvtStk est crée
   */
  correctionStockNegativeResponse(): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/mvtStks/correctionNegative`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStkDto>;
      })
    );
  }
  /**
   * Enregistrer une entrée mvtStk
   *
   * Cette méthode permet d'enregistrer une correction négative mvtStk
   * @return L'objet mvtStk est crée
   */
  correctionStockNegative(): __Observable<MvtStkDto> {
    return this.correctionStockNegativeResponse().pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }

  /**
   * Enregistrer une entrée mvtStk
   *
   * Cette méthode permet d'enregistrer une correction positive mvtStk
   * @return L'objet mvtStk est crée
   */
  correctionStockPositiveResponse(): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/mvtStks/correctionPositive`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MvtStkDto>;
      })
    );
  }
  /**
   * Enregistrer une entrée mvtStk
   *
   * Cette méthode permet d'enregistrer une correction positive mvtStk
   * @return L'objet mvtStk est crée
   */
  correctionStockPositive(): __Observable<MvtStkDto> {
    return this.correctionStockPositiveResponse().pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }

  /**
   * Renvoyer le nombre total de mvtStk
   *
   * Cette méthode permet de renvoyer le nombre de mvtStk
   * @return Le nombre total de mvtStk a été trouvé dans la BDD
   */
  stockReelArticleResponse(): __Observable<__StrictHttpResponse<number>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/mvtStks/stockReel/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return (_r as HttpResponse<any>).clone({ body: parseFloat((_r as HttpResponse<any>).body as string) }) as __StrictHttpResponse<number>
      })
    );
  }
  /**
   * Renvoyer le nombre total de mvtStk
   *
   * Cette méthode permet de renvoyer le nombre de mvtStk
   * @return Le nombre total de mvtStk a été trouvé dans la BDD
   */
  stockReelArticle(): __Observable<number> {
    return this.stockReelArticleResponse().pipe(
      __map(_r => _r.body as number)
    );
  }

  /**
   * Enregistrer un utilisateur
   *
   * Cette méthode permet d'enregistrer un utilisateur
   * @return L'objet utilisateur est crée
   */
  save_5Response(): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/utilisateurs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * Enregistrer un utilisateur
   *
   * Cette méthode permet d'enregistrer un utilisateur
   * @return L'objet utilisateur est crée
   */
  save_5(): __Observable<UtilisateurDto> {
    return this.save_5Response().pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Rechercher un utilisateur
   *
   * Cette méthode permet de rechercher un utilisateur par son ID
   * @return Le utilisateur a été trouvé dans la BDD
   */
  findById_6Response(): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/utilisateurs/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UtilisateurDto>;
      })
    );
  }
  /**
   * Rechercher un utilisateur
   *
   * Cette méthode permet de rechercher un utilisateur par son ID
   * @return Le utilisateur a été trouvé dans la BDD
   */
  findById_6(): __Observable<UtilisateurDto> {
    return this.findById_6Response().pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Renvoi la liste des ventes
   *
   * Cette méthode permet de rechercher et renvoyer la liste des ventes
   * @return successful operation
   */
  findAll_4Response(): __Observable<__StrictHttpResponse<Array<VenteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ventes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<VenteDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des ventes
   *
   * Cette méthode permet de rechercher et renvoyer la liste des ventes
   * @return successful operation
   */
  findAll_4(): __Observable<Array<VenteDto>> {
    return this.findAll_4Response().pipe(
      __map(_r => _r.body as Array<VenteDto>)
    );
  }

  /**
   * Enregistrer une vente
   *
   * Cette méthode permet d'enregistrer une vente
   * @return L'objet vente est crée
   */
  save_6Response(): __Observable<__StrictHttpResponse<VenteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ventes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VenteDto>;
      })
    );
  }
  /**
   * Enregistrer une vente
   *
   * Cette méthode permet d'enregistrer une vente
   * @return L'objet vente est crée
   */
  save_6(): __Observable<VenteDto> {
    return this.save_6Response().pipe(
      __map(_r => _r.body as VenteDto)
    );
  }

  /**
   * Modifier une vente
   *
   * Cette méthode permet de modifier une vente
   * @return L'objet vente est modifié
   */
  update_3Response(): __Observable<__StrictHttpResponse<VenteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/ventes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VenteDto>;
      })
    );
  }
  /**
   * Modifier une vente
   *
   * Cette méthode permet de modifier une vente
   * @return L'objet vente est modifié
   */
  update_3(): __Observable<VenteDto> {
    return this.update_3Response().pipe(
      __map(_r => _r.body as VenteDto)
    );
  }

  /**
   * Rechercher une vente
   *
   * Cette méthode permet de rechercher une vente par son ID
   * @return La vente a été trouvée dans la BDD
   */
  findById_7Response(): __Observable<__StrictHttpResponse<VenteDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ventes/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<VenteDto>;
      })
    );
  }
  /**
   * Rechercher une vente
   *
   * Cette méthode permet de rechercher une vente par son ID
   * @return La vente a été trouvée dans la BDD
   */
  findById_7(): __Observable<VenteDto> {
    return this.findById_7Response().pipe(
      __map(_r => _r.body as VenteDto)
    );
  }

  /**
   * Rechercher une vente
   *
   * Cette méthode permet de supprimer une vente par ID
   * @return successful operation
   */
  delete_2Response(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/ventes/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Rechercher une vente
   *
   * Cette méthode permet de supprimer une vente par ID
   * @return successful operation
   */
  delete_2(): __Observable<{}> {
    return this.delete_2Response().pipe(
      __map(_r => _r.body as {})
    );
  }
}

module ApiService {
}

export { ApiService }
