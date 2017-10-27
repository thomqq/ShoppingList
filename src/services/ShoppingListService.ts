import { Injectable } from "@angular/core";

export class ShoppingList {
  public name: string;
}

@Injectable()
export class ShoppingListService {
  getLists(): ShoppingList[] {
    return [{name: 'pierwsza'}, {name: "druga"}];
  }
}
