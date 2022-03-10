import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../entidades/projects';
@Injectable({
  providedIn: 'root'
})
export class ProyectosService {


  constructor(private http:HttpClient) { }


  obtenerDatos():Observable<any>{
    return this.http.get('assets/data/projects.json');
  }

  editarDatosProjects(projects:Projects):Observable<any>{
    return this.http.post('http://localhost:3000/posts',projects)

  }

}




