import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

@NgModule({
  exports: [NzLayoutModule, NzMenuModule, NzPageHeaderModule],
})
export class DemoNgZorroAntdModule {}
