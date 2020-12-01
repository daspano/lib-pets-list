import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let PetsListService = class PetsListService {
    constructor() {
        this.apiUrl = 'https://petstore.swagger.io/v2/';
    }
    getPetsByStatus(status) {
        return fetch(this.apiUrl + 'pet/findByStatus?status=' + status)
            .then((res) => res.json())
            .then((res) => {
            const auxList = [];
            res.forEach((p) => {
                let aux;
                aux = {
                    id: p.id,
                    name: p.name,
                    status: p.status,
                };
                auxList.push(aux);
            });
            return auxList;
        });
    }
};
PetsListService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PetsListService_Factory() { return new PetsListService(); }, token: PetsListService, providedIn: "root" });
PetsListService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PetsListService);
export { PetsListService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0cy1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wZXRzLWxpc3QvIiwic291cmNlcyI6WyJsaWIvcGV0cy1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFHMUI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLGlDQUFpQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxlQUFlLENBQUMsTUFBYztRQUMzQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLDBCQUEwQixHQUFHLE1BQU0sQ0FBQzthQUM3RCxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6QixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNaLE1BQU0sT0FBTyxHQUFXLEVBQUUsQ0FBQztZQUMzQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hCLElBQUksR0FBUyxDQUFDO2dCQUNkLEdBQUcsR0FBRztvQkFDSixFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJO29CQUNaLE1BQU0sRUFBRSxDQUFDLENBQUMsTUFBTTtpQkFDakIsQ0FBQztnQkFDRixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0YsQ0FBQTs7QUF4QlksZUFBZTtJQUgzQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csZUFBZSxDQXdCM0I7U0F4QlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElQZXQgfSBmcm9tICcuL21vZGVscy9wZXQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGV0c0xpc3RTZXJ2aWNlIHtcbiAgcHVibGljIGFwaVVybDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXBpVXJsID0gJ2h0dHBzOi8vcGV0c3RvcmUuc3dhZ2dlci5pby92Mi8nO1xuICB9XG5cbiAgZ2V0UGV0c0J5U3RhdHVzKHN0YXR1czogc3RyaW5nKTogUHJvbWlzZTxJUGV0W10+IHtcbiAgICAgcmV0dXJuIGZldGNoKHRoaXMuYXBpVXJsICsgJ3BldC9maW5kQnlTdGF0dXM/c3RhdHVzPScgKyBzdGF0dXMpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zdCBhdXhMaXN0OiBJUGV0W10gPSBbXTtcbiAgICAgICAgcmVzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICBsZXQgYXV4OiBJUGV0O1xuICAgICAgICAgIGF1eCA9IHtcbiAgICAgICAgICAgIGlkOiBwLmlkLFxuICAgICAgICAgICAgbmFtZTogcC5uYW1lLFxuICAgICAgICAgICAgc3RhdHVzOiBwLnN0YXR1cyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGF1eExpc3QucHVzaChhdXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGF1eExpc3Q7XG4gICAgICB9KVxuICB9XG59XG4iXX0=