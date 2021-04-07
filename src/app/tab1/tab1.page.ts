import { Component } from '@angular/core';
import { IonItemSliding, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ProvisionsServiceService } from '../provisions-service.service';
import { InputDialogService } from '../input-dialog.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pageTitle = "Provisions"



  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: ProvisionsServiceService, public inputService: InputDialogService) { }


  loadProvisions() {
    return this.dataService.getProvisions();
  }

  async removeItem(provision, index) {
    console.log("Removing Item - ", provision, index);

    const toast = await this.toastController.create({
      position: "top",
      message: provision.name + ' has been removed.',
      duration: 2000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  async editItem(provision, index) {
    console.log("Edit Item - ", provision, index);

    const toast = await this.toastController.create({
      position: "top",
      message: 'Ready to edit ' + provision.name + '.',
      duration: 2000
    });
    toast.present();
    this.inputService.showPrompt(provision, index);
  }

  addItem() {
    console.log("Adding item.");
    this.inputService.showPrompt();
  }


}