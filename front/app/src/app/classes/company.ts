/**
 * Define Company classes
 */
 export interface ICompany {
    id : number;
    name : string;
    description: string;
    address : string;
}

export class Company {
    readonly id : number;
    name : string;
    description: string;
    address : string;

    constructor(data: ICompany){
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.address = data.address;
    }
}
