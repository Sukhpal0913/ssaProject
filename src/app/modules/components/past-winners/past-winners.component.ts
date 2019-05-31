import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../shared_services/http.service';

@Component({
  selector: 'app-past-winners',
  templateUrl: './past-winners.component.html',
  styleUrls: ['./past-winners.component.css']
})
export class PastWinnersComponent implements OnInit {

  httpSubscription: Subscription
  introText: String
  pageTitle: String

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.httpSubscription = this.http.get('https://ssaangular.trust.org/api/content/id/80c2a870-1baf-40ad-b653-49c1d307c0d7').subscribe(result => {
      const data = result && result['contentlets'] && result['contentlets'][0];
      this.introText = data && data['introText'];
      this.pageTitle = data && data['pageTitle']

    })
  }


  ngOnDestroy() {
    this.httpSubscription && this.httpSubscription.unsubscribe();
  }

}
