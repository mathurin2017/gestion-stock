/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ClientDto } from '../models/client-dto';
@Injectable({
  providedIn: 'root',
})
class ClientsApiService extends __BaseService {
  static readonly updatePath = '/clients';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Modifier un client
   *
   * Cette méthode permet de modifier un client
   * @param body undefined
   * @return L'objet client est modifié
   */
  updateResponse(body?: ClientDto): __Observable<__StrictHttpResponse<ClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
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
   * Modifier un client
   *
   * Cette méthode permet de modifier un client
   * @param body undefined
   * @return L'objet client est modifié
   */
  update(body?: ClientDto): __Observable<ClientDto> {
    return this.updateResponse(body).pipe(
      __map(_r => _r.body as ClientDto)
    );
  }
}

module ClientsApiService {
}

export { ClientsApiService }
