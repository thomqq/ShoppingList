import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, List, NavController, NavParams, reorderArray } from 'ionic-angular';
import { ShoppingList, ShoppingListService } from '../../services/ShoppingListService';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {

  @ViewChild(List) list: List;
  public name: string;
  public shoppingList: ShoppingList;

  constructor(private navi: NavController, public navParams: NavParams, private listsService: ShoppingListService, public alertCtrl: AlertController) {
    this.name = this.navParams.get("name");
  }

  ngOnInit(): void {
    this.shoppingList = this.listsService.getList(this.name);
  }

  reorderItems(indexes) {
    this.shoppingList.items = reorderArray(this.shoppingList.items, indexes);
  }

  deleteAllCheckedItemPopup() {
    var popup = this.alertCtrl.create({
      title: "Delete all checked item!",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteAllCheckedItem();
          }
        }
      ]
    });
    popup.present();
  }

  deleteAllCheckedItem() {
    for( var i = 0 ; i < this.shoppingList.items.length;) {
      if (this.shoppingList.items[i].isSelected) {
        this.shoppingList.items.splice(i, 1)
      } else {
        ++i;
      }
    }
  }

}
