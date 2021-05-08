import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
declare var Swiper: any;
const BREAKPOINTS = {
  0: {
    slidesPerView: 1,
    spaceBetween: 15,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 50,
  },
};
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html'
})
export class SwiperComponent implements OnInit {
  dir = 'ltr';
  @Input() items;
  @Input() id;
  @Input() breakpoints = BREAKPOINTS;
  @ContentChild('swiperTemplateRef', { static: false }) swiperTemplateRef: TemplateRef<any>;
  swiperInstance;
  swiperConfig;
  constructor() {
  }

  ngOnInit(): void {
    this.swiperConfig = {
      slidesPerView: 'auto',
      loop: false,
      spaceBetween: 20,
      breakpoints: this.breakpoints,
      autoplay: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      centeredSlides: false,
      init: false,
      observer: true,
      allowClick: false,
      allowTouchMove: false,
      breakpointsBase: 'container'
    };
    this.initSwiper();
  }
  initSwiper() {
    const swiperConfig = { ...this.swiperConfig, dir: this.dir };
    this.swiperInstance = new Swiper(`#${this.id}`, swiperConfig);
    setTimeout(() => {
      this.swiperInstance.init();
    }, 0);
  }

}
