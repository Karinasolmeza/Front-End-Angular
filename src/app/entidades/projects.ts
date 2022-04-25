export class Projects{
    name: string;
    description: String;
    imgProject:string;
    linkProject:string;
    id:number;
    idPersona:number;

    constructor(id:number, name:string, description:String, imgProject:string, linkProject:string, idPersona:number)
{
    this.id=id;
    this.name=name;
    this.description=description;
    this.imgProject=imgProject;
    this.linkProject=linkProject;
    this.idPersona=idPersona;
}
}
