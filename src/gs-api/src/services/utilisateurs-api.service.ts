/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UtilisateurDto } from '../models/utilisateur-dto';
import { ChangePasswordUserDto } from '../models/change-password-user-dto';
import { ArticleDto } from '../models/article-dto';
@Injectable({
  providedIn: 'root',
})
class UtilisateursApiService extends __BaseService {
  static readonly findAllPath = '/utilisateurs';
  static readonly updatePath = '/utilisateurs';
  static readonly updatePasswordPath = '/utilisateurs/changePassword';
  static readonly savePhotoPath = '/utilisateurs/photo/{id}/{title}';
  static readonly deletePath = '/utilisateurs/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des utilisateurs
   *
   * Cette méthode permet de rechercher et renvoyer la liste des utilisateurs
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<UtilisateurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
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
        return _r as __StrictHttpResponse<Array<UtilisateurDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des utilisateurs
   *
   * Cette méthode permet de rechercher et renvoyer la liste des utilisateurs
   * @return successful operation
   */
  findAll(): __Observable<Array<UtilisateurDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<UtilisateurDto>)
    );
  }

  /**
   * Modifier un utilisateur
   *
   * Cette méthode permet de modifier un utilisateur
   * @param body undefined
   * @return L'objet utilisateur est modifié
   */
  updateResponse(body?: UtilisateurDto): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
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
   * Modifier un utilisateur
   *
   * Cette méthode permet de modifier un utilisateur
   * @param body undefined
   * @return L'objet utilisateur est modifié
   */
  update(body?: UtilisateurDto): __Observable<UtilisateurDto> {
    return this.updateResponse(body).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Modifier un mot de passe utilisateur
   *
   * Cette méthode permet de modifier un mot de passe utilisateur
   * @param body undefined
   * @return L'objet utilisateur est modifié
   */
  updatePasswordResponse(body?: ChangePasswordUserDto): __Observable<__StrictHttpResponse<UtilisateurDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/utilisateurs/changePassword`,
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
   * Modifier un mot de passe utilisateur
   *
   * Cette méthode permet de modifier un mot de passe utilisateur
   * @param body undefined
   * @return L'objet utilisateur est modifié
   */
  updatePassword(body?: ChangePasswordUserDto): __Observable<UtilisateurDto> {
    return this.updatePasswordResponse(body).pipe(
      __map(_r => _r.body as UtilisateurDto)
    );
  }

  /**
   * Enregistrer une photo utilisateur
   *
   * Cette méthode permet d'enregistrer une photo utilisateur
   * @param params The `UtilisateursApiService.SavePhotoParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return L'objet utilisateur est crée
   */
  savePhotoResponse(params: UtilisateursApiService.SavePhotoParams): __Observable<__StrictHttpResponse<ArticleDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;


    if (params.file != null) { __formData.append('file', params.file as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/utilisateurs/photo/${encodeURIComponent(String(params.id))}/${encodeURIComponent(String(params.title))}`,
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
   * Enregistrer une photo utilisateur
   *
   * Cette méthode permet d'enregistrer une photo utilisateur
   * @param params The `UtilisateursApiService.SavePhotoParams` containing the following parameters:
   *
   * - `title`:
   *
   * - `id`:
   *
   * - `file`:
   *
   * @return L'objet utilisateur est crée
   */
  savePhoto(params: UtilisateursApiService.SavePhotoParams): __Observable<ArticleDto> {
    return this.savePhotoResponse(params).pipe(
      __map(_r => _r.body as ArticleDto)
    );
  }

  /**
   * Rechercher un utilisateur
   *
   * Cette méthode permet de supprimer un utilisateur par ID
   * @param id undefined
   * @return successful operation
   */
  deleteResponse(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
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
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Rechercher un utilisateur
   *
   * Cette méthode permet de supprimer un utilisateur par ID
   * @param id undefined
   * @return successful operation
   */
  delete(id: number): __Observable<{}> {
    return this.deleteResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module UtilisateursApiService {

  /**
   * Parameters for savePhoto
   */
  export interface SavePhotoParams {
    title: string;
    id: number;
    file: Blob;
  }
}

export { UtilisateursApiService }
