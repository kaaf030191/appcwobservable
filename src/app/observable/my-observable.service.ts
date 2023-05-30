import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class MyObservableService {
	private myObservable$ = new Subject<Array<number>>();

	private listNumber: number[] = [];
	private flagInit: boolean = false;

	constructor() {
		if(!this.flagInit) {
			this.myLogic();

			this.flagInit = true;
		}
	}

	private myLogic(): void {
		setTimeout(() => {
			let numberTemp = Math.floor(Math.random() * 100) + 1;

			this.listNumber.push(numberTemp);

			this.myObservable$.next(this.listNumber);

			this.myLogic();
		}, 5000);
	}

	myObservableChanges$(): Observable<Array<number>> {
		return this.myObservable$.asObservable();
	}
}