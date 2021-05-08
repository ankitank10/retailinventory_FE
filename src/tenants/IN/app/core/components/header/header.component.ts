import { Component, OnInit } from '@angular/core';
import { CartModelServer } from '../../../shared/models/cart.model';
import { CartService } from '../../../shared/services/cart.service';
import { NavigationExtras, Router } from '@angular/router';
import { MAIN_CATEGORIES } from '../../../shared/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  cartData: CartModelServer;
  cartTotal: number;
  subcategory: any;
  currentMainCategory: number;
  mainCategories = MAIN_CATEGORIES;
  constructor(public cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    this.cartService.cartTotal$.subscribe(total => {
      this.cartTotal = total;
    });

    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
  }
  populateSubCategories(evt: any) {
    this.currentMainCategory = +evt.target.id.split('_')[1];
    this.subcategory = this.mainCategories.find(c => {
      return c.id === this.currentMainCategory;
    }
    );
  }
  handleRouting(evt) {
    evt.preventDefault();
    let navigationExtras: NavigationExtras;
    switch (evt.target.id.split('_')[0]) {
      case 'cat':
        navigationExtras = {
          queryParams: { cat: +evt.target.id.split('_')[1], subcat: 0 }
        };
        break;
      case 'subcat':
        navigationExtras = {
          queryParams: { cat: this.currentMainCategory, subcat: +evt.target.id.split('_')[1] }
        };
        break;
      default:
        break;
    }
    this.router.navigate([`/category/${navigationExtras.queryParams.cat}/${navigationExtras.queryParams.subcat}`]);
  }

}
