import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../shared_services/http.service';
import { ActivatedRoute } from '@angular/router';
import { links } from '../../../config';

@Component({
  selector: 'app-award-application',
  templateUrl: './award-application.component.html',
  styleUrls: ['./award-application.component.css']
})
export class AwardApplicationComponent implements OnInit {

  private url: String
  details: Object;

  constructor(
    private http: HttpService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.url = params['url']
      this.http.get(links['categoryDetails']+this.url).subscribe(result => {
        this.details = result['contentlets'][0];
      })
    })
  }

  getimageLink() {
    if(this.details && this.details['imageContentAsset'])
      return `${links['imageLink']}/${this.details['imageContentAsset']}`
  }

}
