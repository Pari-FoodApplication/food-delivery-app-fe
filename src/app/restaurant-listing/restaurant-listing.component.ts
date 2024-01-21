import { Component } from '@angular/core';
import { Restaurant } from '../shared/models/Restaurant';
import { RestaurantService } from './service/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrl: './restaurant-listing.component.css'
})
export class RestaurantListingComponent {

  restaurantList: Restaurant[] ;

  constructor (private router: Router , private restaurantService: RestaurantService) {}

  ngOnInit(){
    this.getAllRestaurants();
  }

  getAllRestaurants(){
    this.restaurantService.getAllRestaurants().subscribe(
      data => {
        this.restaurantList =  data
      }
    )
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  getRandomImage(): string {
    const imageCount = 8; 
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`;
  }

  onButtonClick(id: number) {
    this.router.navigate(['/food-catalogue', id]); // navigate to food catalogue
  }

}
