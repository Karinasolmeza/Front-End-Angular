import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Skills } from "../entidades/skills";
@Injectable({
  providedIn: 'root'
})
export class SkillsService {
 // url:string="https://backend-karinameza.herokuapp.com/skills";
  url:string="https://back-end-frcm.onrender.com/skills";

  constructor(private http:HttpClient) { }


  getListSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(this.url);
  }

  updateSkills(id:number, skills:any):Observable<any>{
    return this.http.put(this.url +"/" +id,skills)

  }
  
  saveSkills(skills:any):Observable<any>{
    return this.http.post(this.url,skills)

  }
 
  deleteSkills(id:number):Observable<any>{
    return this.http.delete(this.url+"/"+id)
  }


}

