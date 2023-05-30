import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-component-one',
	templateUrl: './component-one.component.html',
	styleUrls: ['./component-one.component.css']
})

export class ComponentOneComponent {
	@Output() myAction = new EventEmitter<string>();

	myText: string = '';

	onClickAction(): void {
		this.myAction.emit(this.myText);
	}
}