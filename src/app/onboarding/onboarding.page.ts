import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { SwiperContainer } from 'swiper/element';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OnboardingPage implements OnInit {
  @ViewChild('swiper')
  swiper!: ElementRef<SwiperContainer>;

  currentSlide = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  nextSlide() {
    this.swiper.nativeElement.swiper.slideNext();
  }

  goToAuth() {
    this.router.navigateByUrl('/signup');
  }

  onSlideChange() {
    if (this.swiper && this.swiper.nativeElement) {
      this.currentSlide = this.swiper.nativeElement.swiper.activeIndex;
    }
  }
}
