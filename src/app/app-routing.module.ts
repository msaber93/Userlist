import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './detailes/detailes.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: 'employee', component : TableComponent},
  {path: 'details/:id', component : DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
