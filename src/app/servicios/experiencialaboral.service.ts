import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../entidades/experiencia';
@Injectable({
  providedIn: 'root'
})
export class ExperiencialaboralService {

  constructor(private http:HttpClient){ }

  
  obtenerDatos():Observable<any>{

    return this.http.get('assets/data/experiencia.json');
  }



  editarDatosExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.post('http://localhost:3000/posts',experiencia)

  }

}

