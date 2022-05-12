import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../entidades/projects';
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  url:string="https://backend-karinameza.herokuapp.com/projects";


  constructor(private http:HttpClient) { }

  getListProjects():Observable<Projects[]>{
    return this.http.get<Projects[]>(this.url);
  }
  
  updateProjects(id:number, projects:any):Observable<any>{
    return this.http.put(this.url +"/" +id,projects)

  }
  
  saveProjects(projects:any):Observable<any>{
    return this.http.post(this.url,projects)

  }
 
  deleteProjects(id:number):Observable<any>{
    return this.http.delete(this.url+"/"+id)
  }


}




