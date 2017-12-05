import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(protected dataService: DataService) {
  }

  get list() {
    return this.dataService.list;
  }

  get loadData() {
    return this.dataService.loadData.bind(this.dataService);
  }


}
