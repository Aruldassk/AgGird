import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgGirdComponent } from './ag-gird/ag-gird.component';
import { GpSearchComponent } from './gp-search/gp-search.component'

const routes: Routes = [

  { path: '', component: AgGirdComponent, pathMatch: 'full' },
  { path: 'aggird', component: AgGirdComponent },
  { path: 'search', component: GpSearchComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
