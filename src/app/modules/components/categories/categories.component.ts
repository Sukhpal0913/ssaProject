import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../shared_services/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  httpSubscription: Subscription
  pageTitle: String;
  introText: String;
  titleSubText: String;


  constructor(private http: HttpService) { }

  ngOnInit() {
    this.httpSubscription = this.http.get('https://ssaangular.trust.org/api/content/id/4d2a9cd1-9a23-4b6c-9b33-04fb833bf50a').subscribe(result => {
      const data = result && result['contentlets'];
      this.pageTitle = data && data['pageTitle'];
      this.introText = data && data['introText'];
      this.titleSubText = data && data['titleSubText'];
    })
  }

  ngOnDestroy() {
    this.httpSubscription && this.httpSubscription.unsubscribe();
  }

}
