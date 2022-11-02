import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  { path: 'crud', redirectTo: 'crud/home', pathMatch: 'full'},
  { path: 'crud/home', component: HomeComponent },
  { path: 'crud/details/:productId', component: DetailsComponent },
  { path: 'crud/create', component: NewComponent },
  { path: 'crud/update/:productId', component: UpdateComponent } 
];

@NgModule({
  //imports: [RouterModule.forChild(routes)],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class CrudRoutingModule { }
