import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../entidades/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<any>{
    return this.http.get('assets/data/education.json');
  }

  editarDatosEducacion(educacion:Educacion):Observable<any>{
    return this.http.post('http://localhost:3000/posts',educacion)

  }



}
