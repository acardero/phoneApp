import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class PhoneService {
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${environment.BASE_URL}/api/phones`)
      .pipe(map((res) => res.json()));
  }

  get(id) {
    return this.http.get(`${environment.BASE_URL}/api/phones/${id}`)
      .pipe(map((res) => res.json()));
  }

  edit(phone) {
    return this.http.put(`${environment.BASE_URL}/api/phones/${phone.id}`, phone)
      .pipe(map((res) => res.json()));
  }

  remove(id) {
    return this.http.delete(`${environment.BASE_URL}/api/phones/${id}`)
      .pipe(map((res) => res.json()));
  }
}