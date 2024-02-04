import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from './models/Order';
import { OrderService } from './service/order.service';
import { FoodItem } from '../shared/models/FoodItem';
import { FoodCataloguePage } from '../shared/models/FoodCataloguePage';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.css'
})
export class OrderSummaryComponent {
  totalCost: any;
  foodItemsList: FoodItem[];
  showDialog: boolean = false;
  orderSummary: Order;
  obj: any;
  constructor(private route: ActivatedRoute, private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    const data = this.route.snapshot.queryParams['data'];
    this.obj = JSON.parse(data);
    this.obj.userId=1;
    this.orderSummary = this.obj;

    if (this.orderSummary.foodItemsList) {
      this.foodItemsList = this.orderSummary.foodItemsList;
      this.totalCost = this.orderSummary.foodItemsList.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.quantity * currentValue.price);
      }, 0);
    }
  }

  saveOrder() {
    this.orderService.saveOrder(this.orderSummary)
      .subscribe(
        response => {
          this.showDialog = true;
        },
        error => {
          console.error('Failed to save data:', error);
        }
      );
  }

  closeDialog() {
    this.showDialog = false;
    this.router.navigate(['/']); //routing to home page
  }
}
