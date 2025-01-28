import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'micro-front',
        loadComponent: () => import('./ui/components/card/card.component').then(c => c.CardComponent),
        // pathMatch: 'full'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'micro-front',
    }
];

