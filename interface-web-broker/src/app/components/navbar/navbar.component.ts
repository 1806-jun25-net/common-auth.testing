import { Component, OnInit } from '@angular/core';
import * as Msal from 'msal';
import { AuthService } from '../../services/auth.service';
/**
 * Navbar component
 */

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user: Msal.User = null;
  public LoggedIn = this.authService.isLoggedIn
  public userInfo: any = null;
  public apiCallFailed: boolean;
  public loginFailed: boolean;


  constructor(private authService: AuthService) { }


  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * https://angular.io/api/core/OnInit
   */
  ngOnInit() {
  }

  public login() {
    this.loginFailed = false;
    this.authService.login()
        .then(user => {
            if (user) {
                this.user = user;
                this.LoggedIn = this.authService.isLoggedIn
            } else {
                this.loginFailed = true;
            }
        }, () => {
            this.loginFailed = true;
        });
}

/*private callAPI() {
    this.apiCallFailed = false;
    this.authService.getToken()
        .then(token => {
            this.graphService.getUserInfo(token)
                .subscribe(data => {
                    this.userInfo = data; 
                    console.log(token)
                }, error => {
                    console.error(error);
                    this.apiCallFailed = true;
                });
        }, error => {
            console.error(error);
            this.apiCallFailed = true;
        });
}*/

private logout() {
    this.authService.logout();
 }
}
