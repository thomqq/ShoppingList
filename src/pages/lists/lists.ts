import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShoppingList, ShoppingListService } from "../../services/ShoppingListService";
import { ListPage } from '../list/list';
import { reorderArray } from 'ionic-angular';

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage implements OnInit {

  shoppingLists: ShoppingList[];

  constructor(private navi: NavController, private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.shoppingLists = this.shoppingListService.getLists();
  }

  goToList( name: string ) {
    this.navi.push(ListPage, {name: name});
  }
  reorderItems(indexes) {
    this.shoppingLists = reorderArray(this.shoppingLists, indexes);
  }
}
