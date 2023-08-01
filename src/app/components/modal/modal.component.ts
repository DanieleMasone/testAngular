import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';


/**
 * @author
 * @description
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public dialogRef: DialogRef<ModalComponent>) { }

  ngOnInit(): void { }

}
