export class Experiencia{
    id:number;
    tipoExperiencia: string;
    empresa: String;
    detallesDeExperiencia:string;

    constructor(id:number, tipoExperiencia:string, empresa:String, detallesDeExperiencia:string)
{
    this.id=id;
    this.tipoExperiencia=tipoExperiencia;
    this.empresa=empresa;
    this.detallesDeExperiencia=detallesDeExperiencia;
}
}

