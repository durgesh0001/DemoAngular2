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
        return this._http.get('http://localhost:4000/users')
            .map(res=>res.json())
    }
    addUser(data)
    {
        console.log(data);
        var json=JSON.stringify(data);
        var params='json='+json;
        var headers=new Headers();
        headers.append('Content-Type','application/x-www-form-urlencoded');


        return this._http.post('http://localhost:4000/users/add',
            params,{
                headers:headers,
            }
        ).map(res=>res.json())


    }


}

