import { Injectable } from '@angular/core';
import { ProvisionsServiceService } from './provisions-service.service';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public alertController: AlertController, public dataService: ProvisionsServiceService) { }

  async showPrompt(provision?, index?) {
    const alert = await this.alertController.create({
      header: provision ? 'Edit Item' : 'Add Item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Item Name',
          value: provision ? provision.name : null
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'qty.',
          min: 1,
          value: provision ? provision.quantity : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: provision ? 'Update Item' : 'Add Item',
          handler: (provision) => {

            if (index !== undefined) {
              this.dataService.editItem(provision, index);
            }
            else {
              this.dataService.addItem(provision);
            }

          }
        }
      ]
    });
    await alert.present();
  }
}
