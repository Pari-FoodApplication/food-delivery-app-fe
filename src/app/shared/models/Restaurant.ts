export interface Restaurant {
    id: number; // ? is removed as id cannot be null for any record
    name?: string;
    address?: string ;
    city?: string;
    restaurantDescription?: string;
}