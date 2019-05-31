import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

   }
   get(api: string) : Observable<any>{
     let header = new Headers()
    //  header.append('Access-Control-Allow-Origin', '*')
     header.delete('Access-Control-Allow-Origin')
    return this.http.get(api);
  }
}
