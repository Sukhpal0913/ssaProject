import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared_services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css']
})
export class TermsConditionComponent implements OnInit {

  httpSubscription: Subscription
  mainText: String;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.httpSubscription = this.http.get('https://cms.trust.org/api/content/id/1965279b-df64-4ebc-9a70-2ce069042db1').subscribe(result => {
      const data = result && result['contentlets'] && result['contentlets'][0];
      this.mainText = data && data['mainText'];

    })
  }

  ngOnDestroy() {
    this.httpSubscription && this.httpSubscription.unsubscribe();
  }

}
