import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PetsListService } from './pets-list.service';
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
export { PetsListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BldHMtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9wZXRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBT3REO0lBSUUsMkJBQW9CLFVBQTJCO1FBQTNCLGVBQVUsR0FBVixVQUFVLENBQWlCO0lBQUcsQ0FBQztJQUVuRCxvQ0FBUSxHQUFSLGNBQVksQ0FBQztJQUViLHVDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3pDLElBQUksQ0FBQyxVQUFDLElBQVksSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQzthQUMxQyxLQUFLLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBZCtCLGVBQWU7O0lBSHRDO1FBQVIsS0FBSyxFQUFFO3FEQUFnQjtJQURiLGlCQUFpQjtRQUo3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QiwwYUFBeUM7U0FDMUMsQ0FBQztPQUNXLGlCQUFpQixDQW1CN0I7SUFBRCx3QkFBQztDQUFBLEFBbkJELElBbUJDO1NBbkJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZXRzTGlzdFNlcnZpY2UgfSBmcm9tICcuL3BldHMtbGlzdC5zZXJ2aWNlJztcbmltcG9ydCB7IElQZXQgfSBmcm9tICcuL21vZGVscy9wZXQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItcGV0cy1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BldHMtbGlzdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFBldHNMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzdGF0dXM6IHN0cmluZztcbiAgcHVibGljIHBldHM6IElQZXRbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBldFNlcnZpY2U6IFBldHNMaXN0U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhdHVzICE9PSB1bmRlZmluZWQpe1xuICAgICAgdGhpcy5nZXRQZXRzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0UGV0cygpOiB2b2lke1xuICAgIHRoaXMucGV0U2VydmljZS5nZXRQZXRzQnlTdGF0dXModGhpcy5zdGF0dXMpXG4gICAgICAudGhlbigoZGF0YTogSVBldFtdKSA9PiAodGhpcy5wZXRzID0gZGF0YSkpXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9XG59XG4iXX0=