import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { API_URL_RL } from '../../constants/url';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }
  
  getAllRestaurants(): Observable<any> {
    return this.http.get<any>(API_URL_RL + '/restaurants')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred while getting restaurants :', error);
    return (error.message || error);
  }
}
