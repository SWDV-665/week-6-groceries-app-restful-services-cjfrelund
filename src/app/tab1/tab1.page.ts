import { Component } from '@angular/core';
import { IonItemSliding, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ProvisionsServiceService } from '../provisions-service.service';
import { InputDialogService } from '../input-dialog.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  pageTitle = "Provisions"



  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: ProvisionsServiceService, public inputService: InputDialogService, private socialSharing: SocialSharing) { }


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

  async shareItem(provision, index) {
    console.log("Share Item - ", provision, index);

    const toast = await this.toastController.create({
      position: "top",
      message: 'Sharing item ' + provision.name + '.',
      duration: 2000
    });

    let message = "Hey, can you pick this provision up for me while you are out and about.\n\nProvision:" + provision.name + "\nQuantity: " + provision.quantity + "\nShared via BumbleBoat | 2B Provisions App";
    let subject = "\n\nShared via BumbleBoat | 2B Provisions App";
    // Check if sharing via email is supported
    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("Shared successfully!");
    }).catch((error) => {
      // Sharing via email is not possible
      console.error("Error trying to share ", error);
    });
  }


}