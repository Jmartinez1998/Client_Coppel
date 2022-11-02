import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CrudRoutingModule } from './crud-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { NewComponent } from './new/new.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [HomeComponent, DetailsComponent, NewComponent, UpdateComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class CrudModule { }

