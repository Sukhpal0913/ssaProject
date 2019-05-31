import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared_services/http.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  httpSubscription: Subscription
  aboutTheAwards: String;
  aboutThePrize: String;
  aboutThePrizeUrl: String;
  whatIsModernSlaveryAndHumanTrafficking: String;

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.httpSubscription = this.http.get('https://ssaangular.trust.org/api/content/id/d6da3a6f-76ca-4559-98b7-3e5116fa5006').subscribe(result => {
      const data = result && result['contentlets'] && result['contentlets'][0];
      this.whatIsModernSlaveryAndHumanTrafficking = data && data['whatIsModernSlaveryAndHumanTrafficking'];
      this.aboutThePrizeUrl = data && data['aboutThePrizeUrl'];
      this.aboutThePrize = data && data['aboutThePrize'];
      this.aboutTheAwards = data && data['aboutTheAwards']
    })
  }

  

  ngOnDetroy() {
    this.httpSubscription && this.httpSubscription.unsubscribe();
  }

}
