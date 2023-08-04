import { Url } from "src/app/app-enum";

export interface Menu {
    id: string;
    title: string;
    icon: string;
    url: string;
    active?: boolean;
    subMenu?: Array<Menu>;
}

export const menuProperties: Array<Menu> = [
    {
        id: '1',
        title: 'Tableau de bord',
        icon: 'fas fa-chart-line',
        url: '',
        subMenu: [
            {
                id: '11',
                title: 'Vue d\ensemble',
                icon: 'fas fa-chart-pie',
                url: ''
            },
            {
                id: '12',
                title: 'Statistiques',
                icon: 'fas fa-chart-bar',
                url: Url.STATISTIQUES
            }
        ]
    },
    {
        id: '2',
        title: 'Articles',
        icon: 'fas fa-boxes',
        url: '',
        subMenu: [
            {
                id: '21',
                title: 'Articles',
                icon: 'fas fa-boxes',
                url: Url.ARTICLES
            },
            {
                id: '22',
                title: 'Mouvements du stock',
                icon: 'fab fa-stack-overflow',
                url: Url.MVTSTK
            }
        ]
    },
    {
        id: '3',
        title: 'Clients',
        icon: 'fas fa-users',
        url: '',
        subMenu: [
            {
                id: '31',
                title: 'Clients',
                icon: 'fas fa-users',
                url: Url.CLIENTS
            },
            {
                id: '32',
                title: 'Commandes clients',
                icon: 'fas fa-shopping-basket',
                url: Url.COMMANDES_CLIENTS
            }
        ]
    },
    {
        id: '4',
        title: 'Fournisseurs',
        icon: 'fas fa-users',
        url: '',
        subMenu: [
            {
                id: '41',
                title: 'Fournisseurs',
                icon: 'fas fa-users',
                url: Url.FOURNISSEURS
            },
            {
                id: '42',
                title: 'Commandes fournisseurs',
                icon: 'fas fa-truck',
                url: Url.COMMANDES_FOURNISSEURS
            }
        ]
    },
    {
        id: '5',
        title: 'Parametrages',
        icon: 'fas fa-cogs',
        url: '',
        subMenu: [
            {
                id: '51',
                title: 'Categories',
                icon: 'fas fa-tools',
                url: Url.CATEGORIES
            },
            {
                id: '52',
                title: 'Utilisateurs',
                icon: 'fas fa-users-cog',
                url: Url.UTILISATEURS
            }
        ]
    }
];