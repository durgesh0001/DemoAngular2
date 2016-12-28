/**
 * Created by durgesh on 26/12/16.
 */
import {Component} from 'angular2/core';
import {Httpservices} from '../services/httpServices';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Pager} from '../pager.component';
import {NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective} from 'ng2-table/ng2-table';
import {Pagination} from '../pagination.component';
import {SearchPipe} from '../customPipes/searchPipes';


@Component({
    selector: 'my-users',
    templateUrl: 'app/ts/users/app.users.html',
    pipes:[SearchPipe],
    directives: [Pagination, Pager, FORM_DIRECTIVES, CORE_DIRECTIVES],
    providers:[Httpservices],
})

export class MyUsers {
    private result:Array<any> = [];
    testdata = "";
    searchbyName   = "";
    postdata:string;
    private usersData:Array<any> = [];
    //print to the user the selected page
    currentSelectedPage:string="";
    //print to the user the total iterms per page
    currentItemsPerPage:string="";
    //the maximum buttons to show
    private maxSize:number = 3;
    //the number of pages you want to print
    private totalResults:number = 60;
    //the current page
    private currentPage:number = 2;
    constructor(private _httpservice:Httpservices)
    {
    this.getUsersRecords();
        console.log("return");
        console.log(this.result);



        this.usersData.push(
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg',text:'BMW 1'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg',text:'BMW 2'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg',text:'BMW 3'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg',text:'BMW 4'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg',text:'BMW 5'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg',text:'BMW 6'}
        );


    }
    private setCurrentPage(pageNo:number):void {
        this.currentPage = pageNo;
    };

    private currentPageChanged(event:any):void {
        this.currentSelectedPage = ' is : ' + event.page;
        this.currentItemsPerPage = ' is : ' +  event.itemsPerPage;
    };

    getUsersRecords()
    {

       this. _httpservice.getUser()
            .subscribe(
                data =>this.result=data.records,
                error => console.log(JSON.stringify(error)),
                () => console.log("finish")
            )
        return 1;
    }


}
