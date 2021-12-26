export interface ITypeStage{
    id: number;
    name: string;
}

export class TypeStage{
    readonly id: number;
    name: string;

    constructor(data: ITypeStage){
        this.id = data.id;
        this.name = data.name;
    }
}