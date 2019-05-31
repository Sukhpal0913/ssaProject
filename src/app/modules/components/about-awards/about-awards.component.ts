import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../shared_services/http.service';

@Component({
  selector: 'app-about-awards',
  templateUrl: './about-awards.component.html',
  styleUrls: ['./about-awards.component.css']
})
export class AboutAwardsComponent implements OnInit {

  httpSubscription: Subscription
  introText: String;
  mainText: String;
  theMainObjectivesOfTheAward: String;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.httpSubscription = this.http.get('https://ssaangular.trust.org/api/content/id/3d4096e4-661a-438f-9d25-28c2e0db3e10').subscribe(result => {
      const data = result && result['contentlets'] && result['contentlets'][0];
      this.introText = data && data['introText'];
      this.mainText = data && data['mainText'];
      this.theMainObjectivesOfTheAward = data && data['theMainObjectivesOfTheAward'];
    })

  }

  ngOnDestroy() {
    this.httpSubscription && this.httpSubscription.unsubscribe();
  }

}
