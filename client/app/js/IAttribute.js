System.register(['angular2/core'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var NgTransclude;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgTransclude = (function () {
                function NgTransclude(viewRef) {
                    this.viewRef = viewRef;
                }
                Object.defineProperty(NgTransclude.prototype, "ngTransclude", {
                    get: function () {
                        return this._ngTransclude;
                    },
                    set: function (templateRef) {
                        this._ngTransclude = templateRef;
                        if (templateRef) {
                            this.viewRef.createEmbeddedView(templateRef);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                NgTransclude = __decorate([
                    core_1.Directive({
                        selector: '[ngTransclude]',
                        properties: ['ngTransclude']
                    }),
                    __param(0, core_1.Inject(core_1.ViewContainerRef)), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef])
                ], NgTransclude);
                return NgTransclude;
            }());
            exports_1("NgTransclude", NgTransclude);
        }
    }
});
//# sourceMappingURL=IAttribute.js.map