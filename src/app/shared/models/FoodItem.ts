export interface FoodItem {
    id: number;
    name?: string;
    description?: string;
    isVeg?: boolean;
    price?: number;
    restaurantId?: number;
    quantity: number;
}