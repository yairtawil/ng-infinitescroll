import { Injectable } from '@angular/core';
import { range } from 'lodash';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  list = [];
  loadingRange = 15;
  isLoading = false;

  constructor() {
    this.loadData();
  }

  loadData(): void {
    new Observable((obs) => {
      this.isLoading = true;
      setTimeout(() => {
        obs.next();
        obs.complete();
      }, 1000);
    }).subscribe(() => {
      this.isLoading = false;
      range(this.loadingRange).forEach((value) => {
        this.list.push(`List item ${this.list.length + value}`);
      });
    });
  }

}
