import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

// אם המסכים עדיין לא קיימים – ניצור אותם עוד רגע
import { Dashboard } from './features/dashboard/dashboard';
import { Upload } from './features/upload/upload';
import { Invoices } from './features/invoices/invoices';
import { Reports } from './features/reports/reports';
import { Settings } from './features/settings/settings/settings';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'upload', component: Upload },
      { path: 'invoices', component: Invoices },
      { path: 'reports', component: Reports },
      { path: 'settings', component: Settings },
    ],
  },
];
