import { Routes } from '@angular/router';
import { Stories } from './pages/stories/stories';

export const routes: Routes = [
  {
    path: '',
    component: Stories,
  },
  {
    path: 'stories',
    component: Stories,
  },
];