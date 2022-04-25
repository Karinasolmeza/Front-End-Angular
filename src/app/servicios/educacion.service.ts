import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url:string="http://localhost:8080/educacion";

  constructor(private http:HttpClient) { }


  //getListEducacion():Observable<Educacion[]>{
    //return this.http.get<Educacion[]>(this.url+"/1");
 // }

  
  getListEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(this.url);
  }
  updateEducacion(id:number, educacion:any):Observable<any>{
    return this.http.put(this.url +"/" +id,educacion)

  }
  
  saveEducacion(educacion:any):Observable<any>{
    return this.http.post(this.url,educacion)

  }
 
  deleteEducacion(id:number):Observable<any>{
    return this.http.delete(this.url+"/"+id)
  }



}

  



 



