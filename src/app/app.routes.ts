import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ShowDataComponent } from './components/show-data/show-data.component';

const APP_ROUTES: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'showData', component: ShowDataComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'form' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
