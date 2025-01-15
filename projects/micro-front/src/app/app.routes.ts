import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./default/default.component').then(m => m.DefaultComponent)
    },
    {
        path: 'micro-frontend', loadChildren: ()=> import('./showinfo/showinfo.module').then(m => m.ShowinfoModule)
    }
];
