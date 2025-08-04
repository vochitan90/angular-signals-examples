import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent.component';

const parentRoutes: Routes = [{ path: '', component: ParentComponent }];

@NgModule({
  imports: [RouterModule.forChild(parentRoutes)],
  exports: [RouterModule],
})
export class ParentRoutingModule {}
