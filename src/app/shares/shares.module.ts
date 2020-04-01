/** Angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Custom moules */
import { SharedModule } from '../shared/shared.module';
import { SharesRoutingModule} from './shares-routing.module';

/** Custom components */
import { SharesAccountApplicationComponent } from './/shares-account-application/shares-account-application.component';

@NgModule({
  imports: [
    SharedModule,
    SharesRoutingModule,
    CommonModule
  ],
  declarations: [SharesAccountApplicationComponent],
})
export class SharesModule { }
