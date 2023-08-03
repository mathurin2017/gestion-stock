import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./pages/page-login/page-login.component').then(c => c.PageLoginComponent)
    },
    {
        path: 'inscrire',
        loadComponent: () => import('./pages/page-inscription/page-inscription.component').then(c => c.PageInscriptionComponent)
    },
    {
        path: '',
        loadComponent: () => import('./pages/page-dashboard/page-dashboard.component').then(c => c.PageDashboardComponent),
        children: [
            {
                path: 'statistiques',
                loadComponent: () => import('./pages/page-statistiques/page-statistiques.component').then(c => c.PageStatistiquesComponent)
            },
            {
                path: 'articles',
                loadComponent: () => import('./pages/articles/page-article/page-article.component').then(c => c.PageArticleComponent)
            },
            {
                path: 'article',
                loadComponent: () => import('./pages/articles/nouvel-article/nouvel-article.component').then(c => c.NouvelArticleComponent)
            },
            {
                path: 'mvtstk',
                loadComponent: () => import('./pages/mvtstk/page-mvtstk/page-mvtstk.component').then(c => c.PageMvtstkComponent)
            },
            {
                path: 'clients',
                loadComponent: () => import('./pages/clients/page-client/page-client.component').then(c => c.PageClientComponent)
            },
            {
                path: 'fournisseurs',
                loadComponent: () => import('./pages/fournisseur/page-fournisseur/page-fournisseur.component').then(c => c.PageFournisseurComponent)
            },
            {
                path: 'client',
                loadComponent: () => import('./composants/nouveau-clt-frs/nouveau-clt-frs.component').then(c => c.NouveauCltFrsComponent)
            },
            {
                path: 'fournisseur',
                loadComponent: () => import('./composants/nouveau-clt-frs/nouveau-clt-frs.component').then(c => c.NouveauCltFrsComponent)
            }
        ]
    }
];
