import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var PetsListService = /** @class */ (function () {
    function PetsListService() {
        this.apiUrl = 'https://petstore.swagger.io/v2/';
    }
    PetsListService.prototype.getPetsByStatus = function (status) {
        return fetch(this.apiUrl + 'pet/findByStatus?status=' + status)
            .then(function (res) { return res.json(); })
            .then(function (res) {
            var auxList = [];
            res.forEach(function (p) {
                var aux;
                aux = {
                    id: p.id,
                    name: p.name,
                    status: p.status,
                };
                auxList.push(aux);
            });
            return auxList;
        });
    };
    PetsListService.ɵprov = ɵɵdefineInjectable({ factory: function PetsListService_Factory() { return new PetsListService(); }, token: PetsListService, providedIn: "root" });
    PetsListService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PetsListService);
    return PetsListService;
}());

var PetsListComponent = /** @class */ (function () {
    function PetsListComponent(petService) {
        this.petService = petService;
    }
    PetsListComponent.prototype.ngOnInit = function () { };
    PetsListComponent.prototype.ngOnChanges = function () {
        if (this.status !== undefined) {
            this.getPets();
        }
    };
    PetsListComponent.prototype.getPets = function () {
        var _this = this;
        this.petService.getPetsByStatus(this.status)
            .then(function (data) { return (_this.pets = data); })
            .catch(function (error) { return console.log(error); });
    };
    PetsListComponent.ctorParameters = function () { return [
        { type: PetsListService }
    ]; };
    __decorate([
        Input()
    ], PetsListComponent.prototype, "status", void 0);
    PetsListComponent = __decorate([
        Component({
            selector: 'lib-pets-list',
            template: "<div *ngIf=\"status !== undefined\">\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>Pet Id</th>\r\n        <th>Pet Name</th>\r\n        <th>Pet Status</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let pet of pets\">\r\n        <td>{{pet.id}}</td>\r\n        <td>{{pet.name}}</td>\r\n        <td>{{pet.status}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n"
        })
    ], PetsListComponent);
    return PetsListComponent;
}());

var PetsListModule = /** @class */ (function () {
    function PetsListModule() {
    }
    PetsListModule = __decorate([
        NgModule({
            declarations: [PetsListComponent],
            imports: [
                CommonModule
            ],
            exports: [PetsListComponent]
        })
    ], PetsListModule);
    return PetsListModule;
}());

/*
 * Public API Surface of pets-list
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PetsListComponent, PetsListModule, PetsListService };
//# sourceMappingURL=pets-list.js.map
