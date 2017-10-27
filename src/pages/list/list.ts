import { Component, OnInit, ViewChild } from '@angular/core';
import { List, NavController, NavParams } from 'ionic-angular';
import { ShoppingList, ShoppingListService } from '../../services/ShoppingListService';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {

  @ViewChild(List) list: List;
  public name: string;

  constructor(private navi: NavController, public navParams: NavParams, private listsService: ShoppingListService) {
    this.name = this.navParams.get("name");
  }

  ngOnInit(): void {

  }

}
