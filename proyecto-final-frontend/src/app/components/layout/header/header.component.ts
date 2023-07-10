import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sessionStorage: Storage;
  constructor(public loginService: LoginService) {
    this.sessionStorage = sessionStorage;  }

  logout(){
    this.loginService.logout();
  }

  ngOnInit(): void {
  }

}
