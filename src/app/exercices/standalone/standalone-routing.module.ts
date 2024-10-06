import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StandaloneComponent } from './standalone.component';

const routes = [{ path: '', component: StandaloneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StandaloneRoutingModule {}
