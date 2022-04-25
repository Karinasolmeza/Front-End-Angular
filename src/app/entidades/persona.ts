import { Educacion } from "./educacion";

export class Persona{
    id:number;
    fullName: string;
    tituloEncabezado: String;
    avatarImg:string;
    
    

    constructor(id:number, fullName:string, tituloEncabezado:String, avatarImg:string)
{
    this.id=id;
    this.fullName=fullName;
    this.tituloEncabezado=tituloEncabezado;
    this.avatarImg=avatarImg;
    
    
}
}




