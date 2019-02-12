import { Component, OnInit } from '@angular/core';
import {Item} from '../items';
import {DataService} from '../data.service';

@Component({
  selector: 'app-commission-rogatoire',
  templateUrl: './commission-rogatoire.component.html',
  styleUrls: ['./commission-rogatoire.component.css']
})
export class CommissionRogatoireComponent implements OnInit {
  shoppingItemList: Item[]=[];


  constructor(private dataService: DataService) { }

  // getItems(){
  //   this.dataService.getShoppingItems
  //   .subscribe(items => {
  //     this.shoppingItemList = items;
  //     console.log('data from dataService : '+this.shoppingItemList);
  //   })
  // }


  ngOnInit() {
  }

}
