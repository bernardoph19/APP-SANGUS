import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  constructor(public alertController: AlertController) {}

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: '',
      header: 'Filtro',
      inputs: [

        {
          name: 'name1',
          type: 'text',
          cssClass:'',
          placeholder: 'Placeholder 1',
        },


        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },


        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: '',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'btn',
          handler: () => {
            console.log('Confirm Cancel');
          }

        },
         {
          cssClass:'btn',
          text: 'aplicar',
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
