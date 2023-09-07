/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FournisseurDto } from '../models/fournisseur-dto';
import { ArticleDto } from '../models/article-dto';
@Injectable({
  providedIn: 'root',
})
class FournisseursApiService extends __BaseService {
  static readonly savePath = '/fournisseurs';
  static readonly updatePath = '/fournisseurs';
  static readonly savePhotoPath = '/fournisseurs/photo/{id}/{title}';
  static readonly deletePath = '/fournisseurs/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Enregistrer un fournisseur
   *
   * Cette méthode permet d'enregistrer un fournisseur
   * @param body undefined
   * @return L'objet fournisseur est crée
   */
  saveResponse(body?: FournisseurDto): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
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
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * Enregistrer un fournisseur
   *
   * Cette méthode permet d'enregistrer un fournisseur
   * @param body undefined
   * @return L'objet fournisseur est crée
   */
  save(body?: FournisseurDto): __Observable<FournisseurDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * Modifier un fournisseur
   *
   * Cette méthode permet de modifier un fournisseur
   * @param body undefined
   * @return L'objet fournisseur est modifié
   */
  updateResponse(body?: FournisseurDto): __Observable<__StrictHttpResponse<FournisseurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
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
        return _r as __StrictHttpResponse<FournisseurDto>;
      })
    );
  }
  /**
   * Modifier un fournisseur
   *
   * Cette méthode permet de modifier un fournisseur
   * @param body undefined
   * @return L'objet fournisseur est modifié
   */
  update(body?: FournisseurDto): __Observable<FournisseurDto> {
    return this.updateResponse(body).pipe(
      __map(_r => _r.body as FournisseurDto)
    );
  }

  /**
   * Enregistrer une photo fournisseur
   *
   * Cette méthode permet d'enregistrer une photo fournisseur
   * @param params The `FournisseursApiService.SavePhotoParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return L'objet fournisseur est crée
   */
  savePhotoResponse(params: FournisseursApiService.SavePhotoParams): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;


    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/fournisseurs/photo/${encodeURIComponent(String(params.id))}/${encodeURIComponent(String(params.title))}`,
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
   * Enregistrer une photo fournisseur
   *
   * Cette méthode permet d'enregistrer une photo fournisseur
   * @param params The `FournisseursApiService.SavePhotoParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return L'objet fournisseur est crée
   */
  savePhoto(params: FournisseursApiService.SavePhotoParams): __Observable<ArticleDto> {
    return this.savePhotoResponse(params).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Rechercher un fournisseur
   *
   * Cette méthode permet de supprimer un fournisseur par ID
   * @param id undefined
   * @return successful operation
   */
  deleteResponse(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
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
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Rechercher un fournisseur
   *
   * Cette méthode permet de supprimer un fournisseur par ID
   * @param id undefined
   * @return successful operation
   */
  delete(id: number): __Observable<{}> {
    return this.deleteResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module FournisseursApiService {

  /**
   * Parameters for savePhoto
   */
  export interface SavePhotoParams {
    title: string;
    id: number;
    file: Blob;
  }
}

export { FournisseursApiService }
