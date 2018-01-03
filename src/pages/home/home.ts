import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	items: any;
	filtereditems:any;
	searchTerm: string = '';
	constructor(public navCtrl: NavController) {

		this.items = [
		{title: 'one'},
		{title: 'two'},
		{title: 'three'},
		{title: 'four'},
		{title: 'five'},
		{title: 'six'}
		];
		this.filtereditems=[];
	}
	filterItems(){
		console.log(this.searchTerm);
		this.filtereditems=this.items.filter((item) => {
			return item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
		});    

	}

}
