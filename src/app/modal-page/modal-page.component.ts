import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.scss'],
})
export class ModalPageComponent implements OnInit {

  constructor(public modalController : ModalController) { }

  ngOnInit() {}

  close(){
    this.modalController.dismiss();
  }

}
