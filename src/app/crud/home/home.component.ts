import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { CrudService } from '../crud.service';
import {MatTableDataSource} from '@angular/material/table';
import { Empployee } from 'src/app/Models/empployee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  displayedColumns = ['id', 'employeeNumber', 'name', 'lastName', 'Role', 'actions'];
  employees = new MatTableDataSource<Empployee>();
  constructor(public crudService: CrudService) { }

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.showmeEmployees();
  }
  
  showmeEmployees() {
    this.crudService.getAll()
    .subscribe((data: Empployee[])=>{
      console.log(data);
      this.employees.data = data;
    })  
  }

}

