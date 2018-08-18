import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService } from '../services/phone.service';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css'],
  providers: [PhoneService]

})
export class PhoneDetailsComponent implements OnInit {
  phone: any = {};

  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService, 
    private router: Router
  ) { }

  // ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     this.getPhoneDetails(params['id']);
  //   });
  // }

  ngOnInit() {
    this.route.data.subscribe((resolved) => {
      this.phone = resolved['phone'];
    });
  }

  // getPhoneDetails(id) {
  //   this.phoneService.get(id)
  //     .subscribe((phone) => {
  //       this.phone = phone;
  //     });
  // }

  deletePhone() {
    if (window.confirm('Are you sure?')) {
      this.phoneService.remove(this.phone._id)
        .subscribe(() => {
          this.router.navigate(['']);
        });
    }
  }
}
