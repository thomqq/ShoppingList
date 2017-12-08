import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { ShoppingList, ShoppingListService } from "../../services/ShoppingListService";
import { ListPage } from '../list/list';
import { reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage implements OnInit {

  shoppingLists: string[];

  constructor(private navi: NavController, private shoppingListService: ShoppingListService, public alertCtrl: AlertController) {
  }

  ngOnInit(): void {
    this.shoppingLists = this.shoppingListService.getListsName();
  }

  goToList( name: string ) {
    this.navi.push(ListPage, {name: name});
  }
  reorderItems(indexes) {
    this.shoppingLists = reorderArray(this.shoppingLists, indexes);
  }

  showAddAlert() {
    var  popup = this.alertCtrl.create({
      title: "New shopping list",
      inputs: [
        {
          name: "listName",
          placeholder: "Name"
        }
      ],
      buttons: [
        {
          text: "Save",
          handler: data => {
            this.addList(data.listName);
          }
        }
      ]
    });
    popup.present();
  }

  addList(name: string) {
    this.shoppingLists.push(name);
  }

  deleteList(i: number) {
    var popup = this.alertCtrl.create({
      title: "Delete list: " + this.shoppingLists[i] + "?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.shoppingLists.splice(i, 1);
          }
        }
      ]
    });
    popup.present();
  }
}
