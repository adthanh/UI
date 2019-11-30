import { Component, OnInit, ViewChild } from '@angular/core';
import { LoaddataService } from 'src/app/core/services/module-services/loaddata.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
// import { MatTableDataSource } from '@angular/material';

export interface UserData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

@Component({
  selector: 'app-loaddata',
  templateUrl: './loaddata.component.html',
  styleUrls: ['./loaddata.component.scss']
})

export class LoaddataComponent implements OnInit {
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'avatar'];

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private loaddataService: LoaddataService) {
  }
  jsonData: any = [];

  ngOnInit() {
    this._loadData();
  }

  _loadData() {
    this.loaddataService.getData('page=2').subscribe(response => {
      this.jsonData = response.data;
      this.dataSource = new MatTableDataSource(this.jsonData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  // applyFilter(filterValue) {
  //   this.jsonData.filter = filterValue.trim().toLowerCase();

  //   if (this.jsonData.paginator) {
  //     this.jsonData.paginator.firstPage();
  //   }
  // }
}
