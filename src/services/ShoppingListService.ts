import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

export class ShoppingListItem {
  public name: string;
  public isSelected: boolean;

}

export class ShoppingList {
  public name: string;
  public items: ShoppingListItem[];

}

@Injectable()
export class ShoppingListService {

  listsmap = {};
  restUrl="http://arxsoft.net:8080/";
  //private data: String[];

  constructor(public http: Http) {
    this.listsmap['pierwsza'] = {name: 'pierwsza', items: [{name: 'a', isSelected: false}, {name: 'aa', isSelected: false}, {name: 'aaa', isSelected: false}]};
    this.listsmap['druga'] = {name: "druga", items: [{name: 'b', isSelected: false}]};
    this.listsmap['trzecia'] = {name: 'trzecia', items: [{name: 'c', isSelected: false}]};
    this.listsmap['czwarta'] = {name: "czwarta", items: [{name: 'd', isSelected: false}]};
    this.listsmap['piata'] = {name: 'piata', items: [{name: 'e', isSelected: false}]};
    this.listsmap['szosta'] = {name: "szosta", items: [{name: 'f', isSelected: false}]};

  }

  getListsName() {
    return new Promise(resolve => {
      this.http.get(this.restUrl+'/pobierzSlownikPozycji').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }


  // getListsName(): string[] {
  //   return Object.keys(this.listsmap);
  // }

  getList(name: string): ShoppingList {
    return this.listsmap[name];
  }
}
