export class Footer{
  
    id:number;
    linkFacebook:string;
    linkInstagram:string;
    linkTwitter:string;
    linkEdin:string;
    linkGit:string;
    
    idPersona:number;

    constructor(id:number, linkFacebook:string, linkInstagram:string, linkTwitter:string, linkEdin:string, linkGit:string, idPersona:number)
{
    this.id=id;
    this.linkFacebook=linkFacebook;
    this.linkInstagram=linkInstagram;
    this.linkTwitter=linkTwitter;
    this.linkEdin=linkEdin;
    this.linkGit=linkGit;
  
    this.idPersona=idPersona;
}
}
