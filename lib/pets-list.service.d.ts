import { IPet } from './models/pet.model';
export declare class PetsListService {
    apiUrl: string;
    constructor();
    getPetsByStatus(status: string): Promise<IPet[]>;
}
