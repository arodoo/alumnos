//import { Alumno } from './alumno.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface Alumno {
  id:string;
  nombre: string;
  correo: string;
  telefono: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private url = 'http://localhost/crud_api/api/alumnos';

  constructor(private http: HttpClient) {
   }

   getAll(){
    return this.http.get<[Alumno]>(this.url);
  }

  get(id: string) {
    return this.http.get<[Alumno]>(this.url +'/' + id);
  }

  create(alumno: Alumno) {
    return this.http.post(this.url, alumno);
  }

  update(alumno: Alumno, id: string){
    return this.http.put(this.url + '/' + id, alumno);
  }

  remove(id: string) {
    return this.http.delete(this.url + '/' + id);
  }
}
