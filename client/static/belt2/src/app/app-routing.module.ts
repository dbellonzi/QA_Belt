import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { IndexComponent } from './index/index.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: UserComponent},
  {path: 'index', pathMatch: 'full', component: IndexComponent},
  {path: 'new', pathMatch: 'full', component: NewComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'add/:id', component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
