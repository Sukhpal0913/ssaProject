import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../shared_services/http.service';

@Component({
  selector: 'app-judges',
  templateUrl: './judges.component.html',
  styleUrls: ['./judges.component.css']
})
export class JudgesComponent implements OnInit {

  show: boolean = !false;

  httpSubscription: Subscription
  pageTitle: String;
  introText: String;
  titleSubText: String;

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.httpSubscription = this.http.get('http://cms.trust.org/api/content/id/7e523f2d-0320-40e4-aed3-0eef83bb1408').subscribe(result => {
      const data = result && result['contentlets'] && result['contentlets'][0];
      this.pageTitle = data && data['pageTitle'];
      this.introText =  data && data['introText'];
      this.titleSubText = data && data['titleSubText'];
    })
  }

  ngOnDestroy() {
    this.httpSubscription && this.httpSubscription.unsubscribe();
  }

}
