import { FoodItem } from "../../shared/models/FoodItem";
import { Restaurant } from "../../shared/models/Restaurant";


export interface Order {

    foodItemsList?: FoodItem[];
    userId?: number;
    restaurant?: Restaurant;
}