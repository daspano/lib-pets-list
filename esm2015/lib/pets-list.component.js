import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { PetsListService } from './pets-list.service';
let PetsListComponent = class PetsListComponent {
    constructor(petService) {
        this.petService = petService;
    }
    ngOnInit() { }
    ngOnChanges() {
        if (this.status !== undefined) {
            this.getPets();
        }
    }
    getPets() {
        this.petService.getPetsByStatus(this.status)
            .then((data) => (this.pets = data))
            .catch((error) => console.log(error));
    }
};
PetsListComponent.ctorParameters = () => [
    { type: PetsListService }
];
__decorate([
    Input()
], PetsListComponent.prototype, "status", void 0);
PetsListComponent = __decorate([
    Component({
        selector: 'lib-pets-list',
        template: "<div *ngIf=\"status !== undefined\">\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>Pet Id</th>\r\n        <th>Pet Name</th>\r\n        <th>Pet Status</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let pet of pets\">\r\n        <td>{{pet.id}}</td>\r\n        <td>{{pet.name}}</td>\r\n        <td>{{pet.status}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n"
    })
], PetsListComponent);
export { PetsListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0cy1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BldHMtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9wZXRzLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBT3RELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBSTVCLFlBQW9CLFVBQTJCO1FBQTNCLGVBQVUsR0FBVixVQUFVLENBQWlCO0lBQUcsQ0FBQztJQUVuRCxRQUFRLEtBQUksQ0FBQztJQUViLFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFDO1lBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN6QyxJQUFJLENBQUMsQ0FBQyxJQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQzthQUMxQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0YsQ0FBQTs7WUFmaUMsZUFBZTs7QUFIdEM7SUFBUixLQUFLLEVBQUU7aURBQWdCO0FBRGIsaUJBQWlCO0lBSjdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLDBhQUF5QztLQUMxQyxDQUFDO0dBQ1csaUJBQWlCLENBbUI3QjtTQW5CWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGV0c0xpc3RTZXJ2aWNlIH0gZnJvbSAnLi9wZXRzLWxpc3Quc2VydmljZSc7XG5pbXBvcnQgeyBJUGV0IH0gZnJvbSAnLi9tb2RlbHMvcGV0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBldHMtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZXRzLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQZXRzTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc3RhdHVzOiBzdHJpbmc7XG4gIHB1YmxpYyBwZXRzOiBJUGV0W107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXRTZXJ2aWNlOiBQZXRzTGlzdFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0YXR1cyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHRoaXMuZ2V0UGV0cygpO1xuICAgIH1cbiAgfVxuXG4gIGdldFBldHMoKTogdm9pZHtcbiAgICB0aGlzLnBldFNlcnZpY2UuZ2V0UGV0c0J5U3RhdHVzKHRoaXMuc3RhdHVzKVxuICAgICAgLnRoZW4oKGRhdGE6IElQZXRbXSkgPT4gKHRoaXMucGV0cyA9IGRhdGEpKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfVxufVxuIl19