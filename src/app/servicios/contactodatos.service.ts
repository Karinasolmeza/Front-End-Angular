import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../entidades/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactodatosService {

  constructor(private http:HttpClient) { }
  obtenerDatos():Observable<any>{
    return this.http.get('assets/data/contact.json');
  }

  editarDatosContact(contact:Contact):Observable<any>{
    return this.http.post('http://localhost:3000/posts',contact)

  }

}




