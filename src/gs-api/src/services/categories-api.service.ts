/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CategoryDto } from '../models/category-dto';
@Injectable({
  providedIn: 'root',
})
class CategoriesApiService extends __BaseService {
  static readonly findByCodePath = '/categories/{code}';
  static readonly deletePath = '/categories/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Rechercher une catégorie
   *
   * Cette méthode permet de rechercher une catégorie par son CODE
   * @param code undefined
   * @return La catégorie a été trouvé dans la BDD
   */
  findByCodeResponse(code: string): __Observable<__StrictHttpResponse<CategoryDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/categories/${encodeURIComponent(String(code))}`,
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
   * Cette méthode permet de rechercher une catégorie par son CODE
   * @param code undefined
   * @return La catégorie a été trouvé dans la BDD
   */
  findByCode(code: string): __Observable<CategoryDto> {
    return this.findByCodeResponse(code).pipe(
      __map(_r => _r.body as CategoryDto)
    );
  }

  /**
   * Rechercher une catégorie
   *
   * Cette méthode permet de supprimer une catégorie par ID
   * @param id undefined
   * @return successful operation
   */
  deleteResponse(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
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
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Rechercher une catégorie
   *
   * Cette méthode permet de supprimer une catégorie par ID
   * @param id undefined
   * @return successful operation
   */
  delete(id: number): __Observable<{}> {
    return this.deleteResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module CategoriesApiService {
}

export { CategoriesApiService }
