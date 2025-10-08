import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from '../../../../models/item';
import { ItemsService } from '../../../../core/services/items-service';

@Component({
  selector: 'app-catalog-detail',
  standalone: false,
  templateUrl: './catalog-detail.html',
  styleUrl: './catalog-detail.scss'
})
export class CatalogDetail implements OnInit, OnDestroy {
  public itemElement: Item | undefined;
  subscriptions: Subscription = new Subscription();
  
  private itemsService = inject(ItemsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit() {
    this.subscriptions.add(
      this.route.params.subscribe((p: { id?: string }) => {
        if (p?.id) {
          this.loadItem(Number(p.id));
        }
      })
    );
  }

  loadItem(id: number) {
    this.subscriptions.add(
      this.itemsService.getItemsById(id).subscribe((r: Item) => {
        this.itemElement = r;
      })
    );
  }

  goBack() {
    this.router.navigate(['home']);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
