/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommandeClientDto } from '../models/commande-client-dto';
@Injectable({
  providedIn: 'root',
})
class CommandesClientsApiService extends __BaseService {
  static readonly findAllPath = '/commandesClients';
  static readonly updatePath = '/commandesClients';
  static readonly updateArticlePath = '/commandesClients/{idCommande}/{idLigneCommande}/{idArticle}';
  static readonly updateQuantitePath = '/commandesClients/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly deletePath = '/commandesClients/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des commandes clients
   *
   * Cette méthode permet de rechercher et renvoyer la liste des commandes clients
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<CommandeClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
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
        return _r as __StrictHttpResponse<Array<CommandeClientDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des commandes clients
   *
   * Cette méthode permet de rechercher et renvoyer la liste des commandes clients
   * @return successful operation
   */
  findAll(): __Observable<Array<CommandeClientDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<CommandeClientDto>)
    );
  }

  /**
   * Modifier une commande client
   *
   * Cette méthode permet de modifier une commande client
   * @param body undefined
   * @return L'objet commande client est modifié
   */
  updateResponse(body?: CommandeClientDto): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
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
   * Modifier une commande client
   *
   * Cette méthode permet de modifier une commande client
   * @param body undefined
   * @return L'objet commande client est modifié
   */
  update(body?: CommandeClientDto): __Observable<CommandeClientDto> {
    return this.updateResponse(body).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Modifier l'article de la commande client
   *
   * Cette méthode permet de modifier l'article d'une commande client
   * @param params The `CommandesClientsApiService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return L'objet commande client est modifié
   */
  updateArticleResponse(params: CommandesClientsApiService.UpdateArticleParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/commandesClients/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}/${encodeURIComponent(String(params.idArticle))}`,
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
   * Modifier l'article de la commande client
   *
   * Cette méthode permet de modifier l'article d'une commande client
   * @param params The `CommandesClientsApiService.UpdateArticleParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * - `idArticle`:
   *
   * @return L'objet commande client est modifié
   */
  updateArticle(params: CommandesClientsApiService.UpdateArticleParams): __Observable<CommandeClientDto> {
    return this.updateArticleResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Modifier la quantité de la commande client
   *
   * Cette méthode permet de modifier la quantité d'une commande client
   * @param params The `CommandesClientsApiService.UpdateQuantiteParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return L'objet commande client est modifié
   */
  updateQuantiteResponse(params: CommandesClientsApiService.UpdateQuantiteParams): __Observable<__StrictHttpResponse<CommandeClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/commandesClients/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}/${encodeURIComponent(String(params.quantite))}`,
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
   * Modifier la quantité de la commande client
   *
   * Cette méthode permet de modifier la quantité d'une commande client
   * @param params The `CommandesClientsApiService.UpdateQuantiteParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return L'objet commande client est modifié
   */
  updateQuantite(params: CommandesClientsApiService.UpdateQuantiteParams): __Observable<CommandeClientDto> {
    return this.updateQuantiteResponse(params).pipe(
      __map(_r => _r.body as CommandeClientDto)
    );
  }

  /**
   * Rechercher une commande client
   *
   * Cette méthode permet de supprimer une commande client par ID
   * @param id undefined
   * @return successful operation
   */
  deleteResponse(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
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
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Rechercher une commande client
   *
   * Cette méthode permet de supprimer une commande client par ID
   * @param id undefined
   * @return successful operation
   */
  delete(id: number): __Observable<{}> {
    return this.deleteResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module CommandesClientsApiService {

  /**
   * Parameters for updateArticle
   */
  export interface UpdateArticleParams {
    idLigneCommande: number;
    idCommande: number;
    idArticle: number;
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

export { CommandesClientsApiService }
