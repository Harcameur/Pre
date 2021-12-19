/**
 * Define Company classes
 */

export class Company {
    readonly id : number;
    name : string;
    description: string;
    address : string;

    constructor(id: number, name: string, description: string, address: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
}
