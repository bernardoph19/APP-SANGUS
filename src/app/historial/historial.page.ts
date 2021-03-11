import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  constructor( public alertController: AlertController) { }



  async modalfiltros() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Filtro',

      inputs: [

        {
          cssClass:'',
          name: 'name4',
          type: 'date',
          placeholder:'Fecha de inicio',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        {
          name: 'name4',
          type: 'date',
          placeholder:'Fecha de inicio',
          min: '2017-03-01',
          max: '2018-01-12'
        },

      ],




      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass:'btnn hover:bg-red-600 transition duration-500 ease-in',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },

         {
          cssClass:'btnn hover:bg-red-600 transition duration-500 ease-in',
          text: 'Aplicar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]

    });

    await alert.present();
  }



  ngOnInit() {

  }

}
