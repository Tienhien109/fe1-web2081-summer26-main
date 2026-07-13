import { Routes } from '@angular/router';
import { Contact } from './contact/contact';
import { Products } from './products/products';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';

export const routes: Routes = [
  {
    path: '',
    component: Stories,
  },
  {
    path: 'stories',
    component: Stories,
  },
  {
    path: 'add-story',
    component: AddStory,
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