import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { PhoneService } from '../services/phone.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveDetailsGuardService implements Resolve<any> {

  constructor(
    private phoneService: PhoneService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
      return this.phoneService.get(route.params['id']).pipe(
        catchError((err) => {
          this.router.navigate(['/']);
          const errorDetails = JSON.parse(err._body).message;
          console.log(errorDetails);
          return errorDetails;
      }));
        
  }
}