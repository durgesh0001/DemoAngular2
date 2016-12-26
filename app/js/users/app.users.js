System.register(['angular2/core', '../services/httpServices', 'angular2/common', '../pagination.component', '../pager.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, httpServices_1, common_1, pagination_component_1, pager_component_1;
    var MyUsers;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httpServices_1_1) {
                httpServices_1 = httpServices_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            },
            function (pager_component_1_1) {
                pager_component_1 = pager_component_1_1;
            }],
        execute: function() {
            MyUsers = (function () {
                function MyUsers(_httpservice) {
                    this._httpservice = _httpservice;
                    this.result = [];
                    this.testdata = "";
                    this.usersData = [];
                    //print to the user the selected page
                    this.currentSelectedPage = "";
                    //print to the user the total iterms per page
                    this.currentItemsPerPage = "";
                    //the maximum buttons to show
                    this.maxSize = 3;
                    //the number of pages you want to print
                    this.totalResults = 60;
                    //the current page
                    this.currentPage = 2;
                    this.getUsersRecords();
                    console.log("return");
                    console.log(this.result);
                    this.usersData.push({ image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' });
                }
                MyUsers.prototype.setCurrentPage = function (pageNo) {
                    this.currentPage = pageNo;
                };
                ;
                MyUsers.prototype.currentPageChanged = function (event) {
                    this.currentSelectedPage = ' is : ' + event.page;
                    this.currentItemsPerPage = ' is : ' + event.itemsPerPage;
                };
                ;
                MyUsers.prototype.getUsersRecords = function () {
                    var _this = this;
                    this._httpservice.getUser()
                        .subscribe(function (data) { return _this.result = data.records; }, function (error) { return console.log(JSON.stringify(error)); }, function () { return console.log("finish"); });
                    return 1;
                };
                MyUsers = __decorate([
                    core_1.Component({
                        selector: 'my-users',
                        templateUrl: 'app/ts/users/app.users.html',
                        directives: [pagination_component_1.Pagination, pager_component_1.Pager, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        providers: [httpServices_1.Httpservices],
                    }), 
                    __metadata('design:paramtypes', [httpServices_1.Httpservices])
                ], MyUsers);
                return MyUsers;
            }());
            exports_1("MyUsers", MyUsers);
        }
    }
});
//# sourceMappingURL=app.users.js.map