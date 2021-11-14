import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Grocery";
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, 
    public toastCtrl: ToastController,
    public dataService: GroceriesServiceProvider,
    public inputDialogService: InputDialogServiceProvider
  ) 
  {
  }

  loadItems(){
    return this.dataService.getItems();
  }

  addItem() {
    this.inputDialogService.showPrompt();
  }

  removeItem(item, index) {
    const toast = this.toastCtrl.create({
      message: `Removing Item - ${item.name}...`,
      duration: 3000
    });
    toast.present();
    this.dataService.removeItem(index);
  }

  editItem(item, index) {
    const toast = this.toastCtrl.create({
      message: `Editing Item - ${item.name}...`,
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showPrompt(item, index);
  }
}