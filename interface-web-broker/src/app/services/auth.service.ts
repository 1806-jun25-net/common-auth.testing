import { Injectable } from '@angular/core';
//import './node_modules/msal/out/msal';
import * as Msal from 'msal'; //new way to import Msal
import { debug } from 'util';
/// <reference path="./node_modules/msal/out/msal.d.ts" />
@Injectable()
export class AuthService {
    private applicationConfig: any = {
        clientID: 'c5cbec24-2287-4c8f-9789-d31faa5f5d77',
        graphScopes: ['user.read'],
        authority: 'https://login.microsoftonline.com/project3auth.onmicrosoft.com',
        extraQueryParameter: 'domain_hint=project3auth.onmicrosoft.com'
    };
    private app: any;

    constructor() {
        this.app = new Msal.UserAgentApplication(this.applicationConfig.clientID, this.applicationConfig.authority, () => {
            // callback for login redirect
        });
    }
    get isLoggedIn(){
        const check : boolean = this.app.getUser();
        if (check) {
            return true;
        }
        else {
            return false;
        }
      }
    public login() {
        return this.app.loginPopup(this.applicationConfig.graphScopes,  this.applicationConfig.extraQueryParameter)
            .then(idToken => {
                const user = this.app.getUser();
                if (user) {
                    return user;
                } else {
                    return null;
                }
            }, () => {
                return null;
            });
    }
    public logout() {
        this.app.logout();
    }
    public getToken() {
        return this.app.acquireTokenSilent(this.applicationConfig.graphScopes)
            .then(accessToken => {
                return accessToken;
            }, error => {
                return this.app.acquireTokenPopup(this.applicationConfig.graphScopes)
                    .then(accessToken => {
                        return accessToken;
                    }, err => {
                        console.error(err);
                    });
            });
    }
}