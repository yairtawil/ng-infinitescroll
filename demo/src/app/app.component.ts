import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ng-infinitscroll!';
  list = [];
  index:number = 1;
  count:number = 15;

  constructor() {}

  loadData():void {
    for (let i = this.index; i < this.index + this.count; i++) {
      this.list.push(`list_item_${i}`);
    }
    this.index += this.count;
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.loadData();
    }, 5000);
    this.loadData();
  }

}
