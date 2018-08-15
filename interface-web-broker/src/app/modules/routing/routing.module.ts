import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { MainImageComponent } from '../../components/main-image/main-image.component';

import { ForecastComponent } from '@revaturecloud/forecast';
import { SelectionComponent } from '@revaturecloud/selection';
import { AuthGuard } from '../../auth.guard';

const appRoutes: Routes = [
  { path: '', component: MainImageComponent },
  { path: 'forecast', component: ForecastComponent, canActivate: [AuthGuard] },
  { path: 'selection', component: SelectionComponent, canActivate: [AuthGuard] }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class RoutingModule { }
