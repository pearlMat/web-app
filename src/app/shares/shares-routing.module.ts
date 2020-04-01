/** Angular imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Routing Imports */
import { Route } from '../core/route/route.service';

/** Translation Imports */
import { extract } from '../core/i18n/i18n.service';

/** Custom components */
import { SharesAccountApplicationComponent } from './/shares-account-application/shares-account-application.component';

/** Savings Routes */
const routes: Routes = [
  Route.withShell([
    {
      path: 'savings-application',
      data: { title: extract('Savings Account Application'), breadcrumb: 'Savings Account Application' },
      component: SharesAccountApplicationComponent
    },
  ])
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharesRoutingModule { }
