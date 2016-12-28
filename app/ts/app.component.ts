import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { Headers, Http } from 'angular2/http';
import {MyUsers} from './users/app.users';
import {AddUsers} from './users/app.addUsers';





//Routing => ROUTER_DIRECTIVES,RouteConfig and <base href="/"> in index.html

@Component({
    selector: 'my-app',
    directives:[MyUsers,AddUsers,ROUTER_DIRECTIVES],
    templateUrl: 'app/ts/app.component.html',
})
//Routing

@RouteConfig([
    {path: '/users', name: 'Users', component:MyUsers},
    {path: '/add', name: 'Add', component: AddUsers}

])

export class AppComponent {}