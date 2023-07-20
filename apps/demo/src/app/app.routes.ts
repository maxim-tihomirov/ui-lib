import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./components/demo-page/demo-page.component').then(component => component.DemoPageComponent)
  }
];
