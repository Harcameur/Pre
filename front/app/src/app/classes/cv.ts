export class Cv{
    readonly id: number;
    filename: string;
    name: string;

    constructor(id:number, filename:string, name: string){
        this.id = id;
        this.filename = filename;
        this.name = name;
    }
}