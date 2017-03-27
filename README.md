# ng-infinitescroll

[![NPM](https://nodei.co/npm/ng-infinitescroll.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/ng-infinitescroll/)

**[Demo](https://plnkr.co/edit/nkpG4z6d7qMy9xONuABJ?p=preview)**



## Installation

```shell
npm install --save ng-infinitescroll
```

## Usage

Add `InfiniteScrollModule` to your list of module imports:

```typescript
import {InfiniteScrollModule} from 'ng-infinitescroll';

@NgModule({
  imports: [
    ...
    InfiniteScrollModule
],
...
})
export class AppModule { }

```
Create an array(list) in your component:

```typescript
import { Component } from '@angular/core';

@Component({
...
templateUrl: './app.component.html',
})
export class AppComponent {
  public list:string[] = [];
  
  loadData():void {
    // .. load more data for 'this.list'
  }
  
}
```

use the directive in your html templates:

```html
  <div class="scroll-container" (ansynInfiniteScroll)="loadData()">
    <template ngFor [ngForOf]="list" let-item>
      <div class="item">{{item}}</div>
    </template>
  </div>


```


## Outputs

```typescript
     (ansynInfiniteScroll)="loadData()"
```
`loadData()` method will be called when scroll reaches the bottom.


## Css
`.scroll-container` class should most include `max-height` and `overflow:scroll` or `overflow:auto`
