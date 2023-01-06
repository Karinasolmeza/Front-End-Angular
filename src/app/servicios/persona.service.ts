import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../entidades/persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
//url:string="https://backend-karinameza.herokuapp.com/persona";
url:string="https://back-end-frcm.onrender.com/persona";


  constructor(private http:HttpClient){}

obtenerDatosPersona():Observable<Persona>{
    return this.http.get<Persona>(this.url+"/1");
  }

editarDatosPersona(persona:Persona):Observable<any>{
  return this.http.put(this.url,persona);

}



}