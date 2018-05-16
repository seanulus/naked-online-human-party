import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from '../../models/item.model';
import { ItemsService } from '../../items.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  providers: [ItemsService]
})
export class GridComponent implements OnInit {
@Input() childTypeParam: string;
@Input() childSizeParam: string;
@Input() childCutParam: string;
@Input() childConditionParam: string;
@Input() childColorParam: string;

  items: FirebaseListObservable<any[]>;

  constructor(private itemsService: ItemsService ) { }

  ngOnInit() {
    this.items = this.itemsService.getItems();
    console.log("this is the length of items OnInit:" , this.items);
  }

  toggleAvailability(itemToUpdate) {
    this.itemsService.updateItem(itemToUpdate);
  }

}
