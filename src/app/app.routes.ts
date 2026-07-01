import { Routes } from '@angular/router';
import { AboutComponent } from './about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';

export const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'products',
    component: Products,
  },
];