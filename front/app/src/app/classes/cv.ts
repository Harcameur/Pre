export interface ICv{
    id: number;
    filename: string;
    name: string;
}

export class Cv{
    readonly id: number;
    filename: string;
    name: string;

    constructor(data: ICv){
        this.id = data.id;
        this.filename = data.filename;
        this.name = data.name;
    }
}