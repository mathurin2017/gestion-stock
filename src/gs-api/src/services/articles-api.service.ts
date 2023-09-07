/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ArticleDto } from '../models/article-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { LigneVenteDto } from '../models/ligne-vente-dto';
@Injectable({
  providedIn: 'root',
})
class ArticlesApiService extends __BaseService {
  static readonly findAllPath = '/articles';
  static readonly findAllArticleByIdCategoriePath = '/articles/category/{idCategory}';
  static readonly findHistoriqueCommandeFournisseurPath = '/articles/historique/commandeFournisseur/{idArticle}';
  static readonly findHistoriqueVentePath = '/articles/historique/vente/{idArticle}';
  static readonly savePhotoPath = '/articles/photo/{id}/{title}';
  static readonly findByCodePath = '/articles/{code}';
  static readonly deletePath = '/articles/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des articles
   *
   * Cette méthode permet de rechercher et renvoyer la liste des articles
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
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
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des articles
   *
   * Cette méthode permet de rechercher et renvoyer la liste des articles
   * @return successful operation
   */
  findAll(): __Observable<Array<ArticleDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * Renvoi la liste des articles par catégorie
   *
   * Cette méthode permet de rechercher et renvoyer la liste des articles par catégorie
   * @param idCategory undefined
   * @return successful operation
   */
  findAllArticleByIdCategorieResponse(idCategory: number): __Observable<__StrictHttpResponse<Array<ArticleDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/articles/category/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ArticleDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des articles par catégorie
   *
   * Cette méthode permet de rechercher et renvoyer la liste des articles par catégorie
   * @param idCategory undefined
   * @return successful operation
   */
  findAllArticleByIdCategorie(idCategory: number): __Observable<Array<ArticleDto>> {
    return this.findAllArticleByIdCategorieResponse(idCategory).pipe(
      __map(_r => _r.body as Array<ArticleDto>)
    );
  }

  /**
   * Renvoi la liste des des commandes de fournisseurs par article
   *
   * Cette méthode permet de rechercher et renvoyer la liste des commandes de fournisseurs par article
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueCommandeFournisseurResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/articles/historique/commandeFournisseur/${encodeURIComponent(String(idArticle))}`,
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
   * Renvoi la liste des des commandes de fournisseurs par article
   *
   * Cette méthode permet de rechercher et renvoyer la liste des commandes de fournisseurs par article
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueCommandeFournisseur(idArticle: number): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistoriqueCommandeFournisseurResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * Renvoi la liste des lignes de ventes par article
   *
   * Cette méthode permet de rechercher et renvoyer la liste des lignes de ventes par article
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueVenteResponse(idArticle: number): __Observable<__StrictHttpResponse<Array<LigneVenteDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/articles/historique/vente/${encodeURIComponent(String(idArticle))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneVenteDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des lignes de ventes par article
   *
   * Cette méthode permet de rechercher et renvoyer la liste des lignes de ventes par article
   * @param idArticle undefined
   * @return successful operation
   */
  findHistoriqueVente(idArticle: number): __Observable<Array<LigneVenteDto>> {
    return this.findHistoriqueVenteResponse(idArticle).pipe(
      __map(_r => _r.body as Array<LigneVenteDto>)
    );
  }

  /**
   * Enregistrer une photo article
   *
   * Cette méthode permet d'enregistrer une photo article
   * @param params The `ArticlesApiService.SavePhotoParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return L'objet article est crée
   */
  savePhotoResponse(params: ArticlesApiService.SavePhotoParams): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;


    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/articles/photo/${encodeURIComponent(String(params.id))}/${encodeURIComponent(String(params.title))}`,
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
   * Enregistrer une photo article
   *
   * Cette méthode permet d'enregistrer une photo article
   * @param params The `ArticlesApiService.SavePhotoParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return L'objet article est crée
   */
  savePhoto(params: ArticlesApiService.SavePhotoParams): __Observable<ArticleDto> {
    return this.savePhotoResponse(params).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Rechercher un article
   *
   * Cette méthode permet de rechercher un article par son CODE
   * @param code undefined
   * @return L'article a été trouvé dans la BDD
   */
  findByCodeResponse(code: string): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/articles/${encodeURIComponent(String(code))}`,
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
   * Cette méthode permet de rechercher un article par son CODE
   * @param code undefined
   * @return L'article a été trouvé dans la BDD
   */
  findByCode(code: string): __Observable<ArticleDto> {
    return this.findByCodeResponse(code).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Rechercher un article
   *
   * Cette méthode permet de supprimer un article par ID
   * @param id undefined
   * @return successful operation
   */
  deleteResponse(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
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
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Rechercher un article
   *
   * Cette méthode permet de supprimer un article par ID
   * @param id undefined
   * @return successful operation
   */
  delete(id: number): __Observable<{}> {
    return this.deleteResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module ArticlesApiService {

  /**
   * Parameters for savePhoto
   */
  export interface SavePhotoParams {
    title: string;
    id: number;
    file: Blob;
  }
}

export { ArticlesApiService }
