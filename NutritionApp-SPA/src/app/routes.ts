import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeammateListComponent } from './teammate-list/teammate-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'teammates', component: TeammateListComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

