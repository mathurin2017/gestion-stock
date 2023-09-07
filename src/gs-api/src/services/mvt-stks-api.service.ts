/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MvtStkDto } from '../models/mvt-stk-dto';
@Injectable({
  providedIn: 'root',
})
class MvtStksApiService extends __BaseService {
  static readonly entreeStockPath = '/mvtStks/entree';
  static readonly sortieStockPath = '/mvtStks/sortie';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Enregistrer une entrée mvtStk
   *
   * Cette méthode permet d'enregistrer une entrée mvtStk
   * @param body undefined
   * @return L'objet mvtStk est crée
   */
  entreeStockResponse(body?: MvtStkDto): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/mvtStks/entree`,
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
   * Cette méthode permet d'enregistrer une entrée mvtStk
   * @param body undefined
   * @return L'objet mvtStk est crée
   */
  entreeStock(body?: MvtStkDto): __Observable<MvtStkDto> {
    return this.entreeStockResponse(body).pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }

  /**
   * Enregistrer une entrée mvtStk
   *
   * Cette méthode permet d'enregistrer une sortie mvtStk
   * @param body undefined
   * @return L'objet mvtStk est crée
   */
  sortieStockResponse(body?: MvtStkDto): __Observable<__StrictHttpResponse<MvtStkDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/mvtStks/sortie`,
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
   * Cette méthode permet d'enregistrer une sortie mvtStk
   * @param body undefined
   * @return L'objet mvtStk est crée
   */
  sortieStock(body?: MvtStkDto): __Observable<MvtStkDto> {
    return this.sortieStockResponse(body).pipe(
      __map(_r => _r.body as MvtStkDto)
    );
  }
}

module MvtStksApiService {
}

export { MvtStksApiService }
