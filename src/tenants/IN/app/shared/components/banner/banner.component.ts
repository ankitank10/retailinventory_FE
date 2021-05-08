import { Component, OnInit, Input } from '@angular/core';
import { CategoryBanner } from '../../models/category.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  @Input() bannerItem: CategoryBanner;
  constructor() { }

  ngOnInit(): void {
    console.log(this.bannerItem);
  }

}
