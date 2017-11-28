import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
	selector: '[infiniteScroll]'

})
export class InfiniteScrollDirective {
	@Output() private infiniteScroll = new EventEmitter();
	@HostListener('scroll', ['$event'])
	scroll($event) {
		if (Math.round($event.target.scrollTop + $event.target.clientHeight) >= $event.target.scrollHeight) {
			this.infiniteScroll.emit();
		}
	}

}
