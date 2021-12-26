
export interface IDocument{
    id: number,
    filename: string,
    name: string
}


export class Document{
    readonly id: number;
    filename: string;
    name: string;

    constructor(data:IDocument){
        this.id = data.id;
        this.filename = data.filename;
        this.name = data.name;
    }
}