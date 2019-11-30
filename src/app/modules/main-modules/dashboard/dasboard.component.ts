import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../../../core/services/module-services/dashboard.service";
@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.sass']
})
export class DasboardComponent implements OnInit {

  public jsonData : string
  
  constructor(private dashboardService : DashboardService){ }

  ngOnInit() {
    this._loadData();
  }

  _loadData(){
    this.dashboardService.getData('page=2').subscribe(response => {     
      this.jsonData = JSON.stringify(response.data);
      //  alert(response.data);        
    }, err => {
      console.log(err);
    })
  }
}
