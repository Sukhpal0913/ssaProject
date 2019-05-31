import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../shared_services/http.service';

@Component({
  selector: 'app-modern-slavery',
  templateUrl: './modern-slavery.component.html',
  styleUrls: ['./modern-slavery.component.css']
})
export class ModernSlaveryComponent implements OnInit {

  httpSubscription: Subscription
  pageTitle: String;
  introText: String;
  mainText: String;


  constructor(private http: HttpService) { }

  ngOnInit() {
    this.httpSubscription = this.http.get('https://ssaangular.trust.org/api/content/id/0f6d01a1-b4f9-4f49-926a-d33fd0696208').subscribe(result => {
      const data = result && result['contentlets'] && result['contentlets'][0];
      this.pageTitle = data && data['pageTitle'];
      this.introText = data && data['introText'];
      this.mainText = data && data['mainText'];
    })
  }

  ngOnDestroy() {
    this.httpSubscription && this.httpSubscription.unsubscribe();
  }

}
