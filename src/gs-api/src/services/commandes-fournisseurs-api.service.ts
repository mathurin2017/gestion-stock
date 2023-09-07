/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeFournisseurDto } from '../models/commande-fournisseur-dto';
@Injectable({
  providedIn: 'root',
})
class CommandesFournisseursApiService extends __BaseService {
  static readonly findAllPath = '/commandesFournisseurs';
  static readonly findByCodePath = '/commandesFournisseurs/{code}';
  static readonly deleteArticlePath = '/commandesFournisseurs/{idCommande}/{idLigneCommande}';
  static readonly updateQuantitePath = '/commandesFournisseurs/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly deletePath = '/commandesFournisseurs/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des commandes fournisseurs
   *
   * Cette méthode permet de rechercher et renvoyer la liste des commandes fournisseurs
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
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
        return _r as __StrictHttpResponse<Array<CommandeFournisseurDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des commandes fournisseurs
   *
   * Cette méthode permet de rechercher et renvoyer la liste des commandes fournisseurs
   * @return successful operation
   */
  findAll(): __Observable<Array<CommandeFournisseurDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CommandeFournisseurDto>)
    );
  }

  /**
   * Rechercher une commande fournisseur
   *
   * Cette méthode permet de rechercher une commande fournisseur par son CODE
   * @param code undefined
   * @return La commande fournisseur a été trouvée dans la BDD
   */
  findByCodeResponse(code: string): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/commandesFournisseurs/${encodeURIComponent(String(code))}`,
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
   * Cette méthode permet de rechercher une commande fournisseur par son CODE
   * @param code undefined
   * @return La commande fournisseur a été trouvée dans la BDD
   */
  findByCode(code: string): __Observable<CommandeFournisseurDto> {
    return this.findByCodeResponse(code).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Rechercher une commande fournisseur
   *
   * Cette méthode permet de supprimer une commande fournisseur par ID
   * @param params The `CommandesFournisseursApiService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticleResponse(params: CommandesFournisseursApiService.DeleteArticleParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/commandesFournisseurs/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}`,
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
   * Cette méthode permet de supprimer une commande fournisseur par ID
   * @param params The `CommandesFournisseursApiService.DeleteArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteArticle(params: CommandesFournisseursApiService.DeleteArticleParams): __Observable<CommandeFournisseurDto> {
    return this.deleteArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Modifier la quantité de la commande fournisseur
   *
   * Cette méthode permet de modifier la quantité d'une commande fournisseur
   * @param params The `CommandesFournisseursApiService.UpdateQuantiteParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return L'objet commande fournisseur est modifié
   */
  updateQuantiteResponse(params: CommandesFournisseursApiService.UpdateQuantiteParams): __Observable<__StrictHttpResponse<CommandeFournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/commandesFournisseurs/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}/${encodeURIComponent(String(params.quantite))}`,
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
   * Modifier la quantité de la commande fournisseur
   *
   * Cette méthode permet de modifier la quantité d'une commande fournisseur
   * @param params The `CommandesFournisseursApiService.UpdateQuantiteParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return L'objet commande fournisseur est modifié
   */
  updateQuantite(params: CommandesFournisseursApiService.UpdateQuantiteParams): __Observable<CommandeFournisseurDto> {
    return this.updateQuantiteResponse(params).pipe(
      __map(_r => _r.body as CommandeFournisseurDto)
    );
  }

  /**
   * Rechercher une commande fournisseur
   *
   * Cette méthode permet de supprimer une commande fournisseur par ID
   * @param id undefined
   * @return successful operation
   */
  deleteResponse(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
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
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Rechercher une commande fournisseur
   *
   * Cette méthode permet de supprimer une commande fournisseur par ID
   * @param id undefined
   * @return successful operation
   */
  delete(id: number): __Observable<{}> {
    return this.deleteResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module CommandesFournisseursApiService {

  /**
   * Parameters for deleteArticle
   */
  export interface DeleteArticleParams {
    idLigneCommande: number;
    idCommande: number;
  }

  /**
   * Parameters for updateQuantite
   */
  export interface UpdateQuantiteParams {
    quantite: number;
    idLigneCommande: number;
    idCommande: number;
  }
}

export { CommandesFournisseursApiService }
