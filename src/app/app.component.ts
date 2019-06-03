import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ssa';
  onclick: false;
  show: boolean = false;
  hide:boolean = false;
  
constructor(private router:Router){

}

  onActivate(component) {
  }

  showMe() {
    this.show = !this.show;
  }

  route(routePath){
    this.show=false;
    this.router.navigate([routePath]);
  }
}




