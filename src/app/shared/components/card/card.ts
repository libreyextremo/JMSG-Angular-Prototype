import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../../models/item';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input() item!: Item;
  
  private router = inject(Router);

  openDetails(id: number): void {
    this.router.navigate(['/item', id]);
  }
}