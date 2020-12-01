import { OnInit, OnChanges } from '@angular/core';
import { PetsListService } from './pets-list.service';
import { IPet } from './models/pet.model';
export declare class PetsListComponent implements OnInit, OnChanges {
    private petService;
    status: string;
    pets: IPet[];
    constructor(petService: PetsListService);
    ngOnInit(): void;
    ngOnChanges(): void;
    getPets(): void;
}
