import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'micro',
        loadComponent: () => import('./default/default.component').then(m => m.DefaultComponent),
        // pathMatch: 'full'
    },
    {
        path: 'micro-frontend', loadChildren: ()=> import('./showinfo/showinfo.module').then(m => m.ShowinfoModule)
    }
];

