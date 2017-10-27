import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShoppingList, ShoppingListService } from '../../services/ShoppingListService';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit {


  constructor(private navi: NavController, private listsService: ShoppingListService) {

  }

  ngOnInit(): void {

  }

}
