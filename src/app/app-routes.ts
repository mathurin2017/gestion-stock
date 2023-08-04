import { Routes } from '@angular/router';
import { Url } from './app-enum';

export const appRoutes: Routes = [
    {
        path: Url.LOGIN,
        loadComponent: () => import('./pages/page-login/page-login.component').then(c => c.PageLoginComponent)
    },
    {
        path: Url.INSCRIRE,
        loadComponent: () => import('./pages/page-inscription/page-inscription.component').then(c => c.PageInscriptionComponent)
    },
    {
        path: '',
        loadComponent: () => import('./pages/page-dashboard/page-dashboard.component').then(c => c.PageDashboardComponent),
        children: [
            {
                path: Url.STATISTIQUES,
                loadComponent: () => import('./pages/page-statistiques/page-statistiques.component').then(c => c.PageStatistiquesComponent)
            },
            {
                path: Url.ARTICLES,
                loadComponent: () => import('./pages/page-article/page-article.component').then(c => c.PageArticleComponent)
            },
            {
                path: Url.ARTICLE,
                loadComponent: () => import('./composants/nouvel-article/nouvel-article.component').then(c => c.NouvelArticleComponent)
            },
            {
                path: Url.MVTSTK,
                loadComponent: () => import('./pages/page-mvtstk/page-mvtstk.component').then(c => c.PageMvtstkComponent)
            },
            {
                path: Url.CLIENTS,
                loadComponent: () => import('./pages/page-client/page-client.component').then(c => c.PageClientComponent)
            },
            {
                path: Url.FOURNISSEURS,
                loadComponent: () => import('./pages/page-fournisseur/page-fournisseur.component').then(c => c.PageFournisseurComponent)
            },
            {
                path: Url.CLIENT,
                loadComponent: () => import('./composants/nouveau-clt-frs/nouveau-clt-frs.component').then(c => c.NouveauCltFrsComponent),
                data: { origin: Url.CLIENT }
            },
            {
                path: Url.FOURNISSEUR,
                loadComponent: () => import('./composants/nouveau-clt-frs/nouveau-clt-frs.component').then(c => c.NouveauCltFrsComponent),
                data: { origin: Url.FOURNISSEUR }
            },
            {
                path: Url.COMMANDES_CLIENTS,
                loadComponent: () => import('./pages/page-cmd-clt-frs/page-cmd-clt-frs.component').then(c => c.PageCmdCltFrsComponent),
                data: { origin: Url.CLIENTS,  url: Url.COMMANDE_CLIENT }
            },
            {
                path: Url.COMMANDES_FOURNISSEURS,
                loadComponent: () => import('./pages/page-cmd-clt-frs/page-cmd-clt-frs.component').then(c => c.PageCmdCltFrsComponent),
                data: { origin: Url.FOURNISSEURS,  url: Url.COMMANDE_FOURNISSEUR }
            },
            {
                path: Url.COMMANDE_CLIENT,
                loadComponent: () => import('./composants/nouvel-cmd-clt-frs/nouvel-cmd-clt-frs.component').then(c => c.NouvelCmdCltFrsComponent),
                data: { origin: Url.CLIENT }
            },
            {
                path: Url.COMMANDE_FOURNISSEUR,
                loadComponent: () => import('./composants/nouvel-cmd-clt-frs/nouvel-cmd-clt-frs.component').then(c => c.NouvelCmdCltFrsComponent),
                data: { origin: Url.FOURNISSEUR }
            },
            {
                path: Url.CATEGORIES,
                loadComponent: () => import('./pages/page-categorie/page-categorie.component').then(c => c.PageCategorieComponent)
            },
            {
                path: Url.CATEGORIE,
                loadComponent: () => import('./composants/nouvel-categorie/nouvel-categorie.component').then(c => c.NouvelCategorieComponent)
            },
            {
                path: Url.UTILISATEURS,
                loadComponent: () => import('./pages/page-utilisateur/page-utilisateur.component').then(c => c.PageUtilisateurComponent)
            },
            {
                path: Url.UTILISATEUR,
                loadComponent: () => import('./composants/nouveau-utilisateur/nouveau-utilisateur.component').then(c => c.NouveauUtilisateurComponent)
            },
            {
                path: Url.PROFIL,
                loadComponent: () => import('./pages/page-profil/page-profil.component').then(c => c.PageProfilComponent)
            }
        ]
    }
];