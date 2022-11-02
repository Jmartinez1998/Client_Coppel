import { Component, OnInit } from '@angular/core';
import { Empployee } from 'src/app/Models/empployee';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees: Empployee[] = [];

  constructor(public crudService: CrudService) { }

  ngOnInit() {
    this.crudService.getAll().subscribe((data: Empployee[])=>{
      console.log(data);
      this.employees = data;
    })  
  }
}
