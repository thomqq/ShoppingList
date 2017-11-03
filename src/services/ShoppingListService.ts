import { Injectable } from "@angular/core";

export class ShoppingListItem {
  public name: string;
  public status: boolean;

}

export class ShoppingList {
  public name: string;
  public items: ShoppingListItem[];

}

@Injectable()
export class ShoppingListService {

  listsmap = {};

  constructor() {
    this.listsmap['pierwsza'] = {name: 'pierwsza', items: [{name: 'a', status: 0}, {name: 'aa', status: 0}, {name: 'aaa', status: 0}]};
    this.listsmap['druga'] = {name: "druga", items: [{name: 'b', status: 0}]};
    this.listsmap['trzecia'] = {name: 'trzecia', items: [{name: 'c', status: 0}]};
    this.listsmap['czwarta'] = {name: "czwarta", items: [{name: 'd', status: 0}]};
    this.listsmap['piata'] = {name: 'piata', items: [{name: 'e', status: 0}]};
    this.listsmap['szosta'] = {name: "szosta", items: [{name: 'f', status: 0}]};

  }

  getListsName(): string[] {
    return Object.keys(this.listsmap);
  }

  getList(name: string): ShoppingList {
    return this.listsmap[name];
  }
}
