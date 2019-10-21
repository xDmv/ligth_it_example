import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DatakeepService } from 'src/app/services/datakeep.service';


@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

	data$;

	title    : string;
	products : any;
	product  : any;
	shown    : boolean = false;

	cols: number = 1;
	hei : string = '1:1';

	constructor(
		public  api    : ApiService,
		private router : Router,
		public  data   : DatakeepService
	) {

	}

	ngOnInit() {
		this.title = "List products";
		this.data$ = this.api.listProduct().subscribe(
			data => {
				this.products = data;
				this.shown = true;
			},
			error => {
				console.log('error: ', error);
			}
		);
	}

	onGridList() {
		if (this.cols == 3) {
			this.cols = 1;
		} else {
			this.cols = 3;
			this.hei = "3:1";
		}
	}

	onChoeseProduct(product: any) {
		console.log('product: ', product);
		console.log('product.id: ', product.id);
		this.data.check_product = product;
		this.router.navigate(['/product/' + product.id]);
	}

}
