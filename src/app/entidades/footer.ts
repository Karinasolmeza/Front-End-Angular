export class Footer{
  
    id:number;
    linkFacebook:string;
    linkInstagram:string;
    linkTwitter:string;
    linkEdin:string;
    
    idPersona:number;

    constructor(id:number, linkFacebook:string, linkInstagram:string, linkTwitter:string, linkEdin:string, idPersona:number)
{
    this.id=id;
    this.linkFacebook=linkFacebook;
    this.linkInstagram=linkInstagram;
    this.linkTwitter=linkTwitter;
    this.linkEdin=linkEdin;
  
    this.idPersona=idPersona;
}
}
