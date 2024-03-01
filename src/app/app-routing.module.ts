import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'pageBody',
    loadComponent: () => import('./shared/components/page-body.component').then((c) => c.PageBody),
  },
  {
    path: 'pageGoals',
    loadComponent: () => import('./shared/components/page-goals.component').then((c) => c.PageGoals),
  },
  {
    path: 'pageWorkout',
    loadComponent: () => import('./shared/components/page-workout.component').then((c) => c.PageWorkout),
  },
  {
    path: 'pageYoga',
    loadComponent: () => import('./shared/components/page-yoga.component').then((c) => c.PageYoga),
  },
  {
    path: 'pageProtocol',
    loadComponent: () => import('./shared/components/page-protocol.component').then((c) => c.PageProtocol),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
