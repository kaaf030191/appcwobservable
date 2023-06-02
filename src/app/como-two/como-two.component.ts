import { Component } from '@angular/core';
import { MyObservableService } from '../observable/my-observable.service';

@Component({
	selector: 'app-como-two',
	templateUrl: './como-two.component.html',
	styleUrls: ['./como-two.component.css']
})

export class ComoTwoComponent {
	mySubscription: any = null;
	myObservableResponse: number[] = [];

	constructor(
		private myObservableService: MyObservableService
	) {

	}

	xSuscribe(): void {
		if(this.mySubscription == null) {
			this.mySubscription = this.myObservableService.myObservableChanges$().subscribe({
				next: (response: number[]) => {
					this.myObservableResponse = JSON.parse(JSON.stringify(response));
				}
			});
		}
	}

	xUnsuscribe(): void {
		this.mySubscription.unsubscribe();

		this.mySubscription = null;
	}
}