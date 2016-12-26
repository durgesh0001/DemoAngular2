/**
 * Created by root on 26/12/16.
 */
import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
@Injectable()

export class Httpservices
{

    constructor(private _http:Http)
    {

    }

    getUser()
    {
        return this._http.get('http://www.w3schools.com/angular/customers.php')
            .map(res=>res.json())
    }

}

