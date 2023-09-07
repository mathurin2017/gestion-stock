/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { ArticlesApiService } from './services/articles-api.service';
import { ApiService } from './services/api.service';
import { CategoriesApiService } from './services/categories-api.service';
import { ClientsApiService } from './services/clients-api.service';
import { CommandesClientsApiService } from './services/commandes-clients-api.service';
import { CommandesFournisseursApiService } from './services/commandes-fournisseurs-api.service';
import { EntreprisesApiService } from './services/entreprises-api.service';
import { FournisseursApiService } from './services/fournisseurs-api.service';
import { MvtStksApiService } from './services/mvt-stks-api.service';
import { UtilisateursApiService } from './services/utilisateurs-api.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    ArticlesApiService,
    ApiService,
    CategoriesApiService,
    ClientsApiService,
    CommandesClientsApiService,
    CommandesFournisseursApiService,
    EntreprisesApiService,
    FournisseursApiService,
    MvtStksApiService,
    UtilisateursApiService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
