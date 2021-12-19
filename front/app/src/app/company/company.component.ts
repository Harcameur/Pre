import { Component, OnInit } from '@angular/core';
import { Company } from '../classes/company';
import { ActivatedRoute } from '@angular/router';
import { company_list } from '../example';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company : Company | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('companyID'));
  
    // Find the product that correspond with the id provided in route.
    this.company = company_list.find(company_list => company_list.id === productIdFromRoute);
  }

}
