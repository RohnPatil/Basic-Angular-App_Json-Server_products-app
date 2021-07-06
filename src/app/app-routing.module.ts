import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ShowComponent } from './show/show.component';
import { SortComponent } from './sort/sort.component';

const routes: Routes = [
  
  {path:'add',component:AddComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'delete/:id',component:DeleteComponent},
  {path:'show',component:ShowComponent},
  {path:'sort',component:SortComponent},

  {path:'',redirectTo:'/show', pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
