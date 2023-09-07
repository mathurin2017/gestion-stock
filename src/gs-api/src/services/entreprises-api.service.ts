/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EntrepriseDto } from '../models/entreprise-dto';
import { ArticleDto } from '../models/article-dto';
@Injectable({
  providedIn: 'root',
})
class EntreprisesApiService extends __BaseService {
  static readonly savePath = '/entreprises';
  static readonly updatePath = '/entreprises';
  static readonly savePhotoPath = '/entreprises/photo/{id}/{title}';
  static readonly findByIdPath = '/entreprises/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Enregistrer une entreprise
   *
   * Cette méthode permet d'enregistrer une entreprise
   * @param body undefined
   * @return L'objet entreprise est crée
   */
  saveResponse(body?: EntrepriseDto): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
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
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * Enregistrer une entreprise
   *
   * Cette méthode permet d'enregistrer une entreprise
   * @param body undefined
   * @return L'objet entreprise est crée
   */
  save(body?: EntrepriseDto): __Observable<EntrepriseDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * Modifier une entreprise
   *
   * Cette méthode permet de modifier une entreprise
   * @param body undefined
   * @return L'objet entreprise est modifié
   */
  updateResponse(body?: EntrepriseDto): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
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
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * Modifier une entreprise
   *
   * Cette méthode permet de modifier une entreprise
   * @param body undefined
   * @return L'objet entreprise est modifié
   */
  update(body?: EntrepriseDto): __Observable<EntrepriseDto> {
    return this.updateResponse(body).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }

  /**
   * Enregistrer une photo entreprise
   *
   * Cette méthode permet d'enregistrer une photo entreprise
   * @param params The `EntreprisesApiService.SavePhotoParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return L'objet entreprise est crée
   */
  savePhotoResponse(params: EntreprisesApiService.SavePhotoParams): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;


    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/entreprises/photo/${encodeURIComponent(String(params.id))}/${encodeURIComponent(String(params.title))}`,
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
   * Enregistrer une photo entreprise
   *
   * Cette méthode permet d'enregistrer une photo entreprise
   * @param params The `EntreprisesApiService.SavePhotoParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return L'objet entreprise est crée
   */
  savePhoto(params: EntreprisesApiService.SavePhotoParams): __Observable<ArticleDto> {
    return this.savePhotoResponse(params).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Rechercher une entreprise
   *
   * Cette méthode permet de rechercher une entreprise par son ID
   * @param id undefined
   * @return L'entreprise a été trouvée dans la BDD
   */
  findByIdResponse(id: number): __Observable<__StrictHttpResponse<EntrepriseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
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
        return _r as __StrictHttpResponse<EntrepriseDto>;
      })
    );
  }
  /**
   * Rechercher une entreprise
   *
   * Cette méthode permet de rechercher une entreprise par son ID
   * @param id undefined
   * @return L'entreprise a été trouvée dans la BDD
   */
  findById(id: number): __Observable<EntrepriseDto> {
    return this.findByIdResponse(id).pipe(
      __map(_r => _r.body as EntrepriseDto)
    );
  }
}

module EntreprisesApiService {

  /**
   * Parameters for savePhoto
   */
  export interface SavePhotoParams {
    title: string;
    id: number;
    file: Blob;
  }
}

export { EntreprisesApiService }
