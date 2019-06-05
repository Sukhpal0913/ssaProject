import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { HttpService } from '../../shared_services/http.service';
import { links } from '../../../config';
import { forkJoin } from 'rxjs'

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
  contentList: Array<Object>;
  ImgbasUrl:String;


  constructor(private http: HttpService
   ) { }

  ngOnInit() {
  
    let api1 = this.http.get(links['categories']);
    let api2 = this.http.get(links['categoryList'])
    this.ImgbasUrl=links['imageLink'];
    this.httpSubscription = forkJoin([api1, api2]).subscribe(result => {
      const data = result[0] && result[0]['contentlets'][0];
      this.pageTitle = data && data['pageTitle'];
      this.introText = data && data['introText'];
      this.titleSubText = data && data['titleSubText'];
      this.contentList = result[1]['contentlets'];
    })
  }

  ngOnDestroy() {
    this.httpSubscription && this.httpSubscription.unsubscribe();
  }
}
