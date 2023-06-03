import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  router: any;


  logout(){
   // Security.clear();
    this.router.navigate(['/login']);
  }
  }
