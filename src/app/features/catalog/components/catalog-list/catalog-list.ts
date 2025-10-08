import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from '../../../../models/item';
import { ItemsService } from '../../../../core/services/items-service';

@Component({
  selector: 'app-catalog-list',
  standalone: false,
  templateUrl: './catalog-list.html',
  styleUrl: './catalog-list.scss'
})
export class CatalogList implements OnInit, OnDestroy {
  public itemlistElements: Item[] = [];
  subscriptions: Subscription = new Subscription();
  
  private itemsService = inject(ItemsService);

  ngOnInit() {
    this.subscriptions.add(
      this.itemsService.getItems().subscribe((r: Item[]) => {
        this.itemlistElements = r;
      })
    );
  }
  
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}