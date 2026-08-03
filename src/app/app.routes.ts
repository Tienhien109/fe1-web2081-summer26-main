import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Products } from './products/products';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';
import { AddProduct } from './pages/add-product/add-product';
import { Register } from './pages/register/register';
import { About } from './pages/about/about';
import { Login } from './pages/login/login';

import { authGuard } from './guards/auth-guard';
import { guestGuard } from './guards/guest.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'stories',
    pathMatch: 'full',
  },
  {
    path: 'stories',
    component: Stories,
    canActivate: [authGuard],
  },
  {
    path: 'add-story',
    component: AddStory,
    canActivate: [authGuard],
  },
  {
    path: 'products',
    component: Products,
    canActivate: [authGuard],
  },
  {
    path: 'add-product',
    component: AddProduct,
    canActivate: [authGuard],
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'login',
    component: Login,
    canActivate: [guestGuard],
  },
  {
    path: 'register',
    component: Register,
  },
];