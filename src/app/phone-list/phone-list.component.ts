import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../services/phone.service';
console.log('PhoneService', PhoneService);

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css'],
  //providers: [PhoneService]
})
export class PhoneListComponent implements OnInit {
  phones:any=[];
  constructor(private phone: PhoneService) { }

  ngOnInit() {
    console.log(this.phone);
    this.phone.getList()
    .subscribe((phones) => {
      this.phones = phones;
    });
  }

}
