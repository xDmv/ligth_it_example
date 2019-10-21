import { Component, OnInit, Inject } from '@angular/core';
import { DetailProductComponent } from "../../pages/detail-product/detail-product.component"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
	text: string;
}
@Component({
	selector: 'app-messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

	constructor(
		public dialogRef : MatDialogRef<DetailProductComponent>,
		@Inject(MAT_DIALOG_DATA) public dataparam: DialogData
	) {

	}

	ngOnInit() {
	}

	onClose(){
		this.dialogRef.close();
	}
}
