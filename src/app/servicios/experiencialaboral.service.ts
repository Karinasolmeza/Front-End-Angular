import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ExperiencialaboralService {

  constructor(private http:HttpClient){ }

  
  obtenerDatos():Observable<any>{
    return this.http.get('assets/data/experiencia.json');
  }
}

