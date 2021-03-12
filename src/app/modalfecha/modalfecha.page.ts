import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalfecha',
  templateUrl: './modalfecha.page.html',
  styleUrls: ['./modalfecha.page.scss'],
})
export class ModalfechaPage implements OnInit {

  fechaInicio : Date = new Date();
  fechaFin : Date = new Date();
  constructor(
    private modalCtrl: ModalController
  ) { 

  }

  ngOnInit() {


  }

  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }

  salirConArgumentos() {

    this.modalCtrl.dismiss({
      nombre: 'Felipe',
      pais: 'España'
    });

  }


  seleccionaFechaInicio(event:any) {
    console.log('ionChange', event)
    console.log('Date', new Date (event.detail.value ))
  }

  seleccionaFechaFin(event:any) {
    console.log('ionChange', event)
    console.log('Date', new Date (event.detail.value ))
  }
}
