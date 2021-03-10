import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mdUser } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(
    private http: HttpClient,
  ) { }

  postInicioSesion( modeloUser : mdUser ){        
    
    return this.http.post('https://agustin.innovated.xyz/api/seguridad/usuario/iniciosesion', modeloUser, {               
      headers: new HttpHeaders({
        'Content-Type'  : "application/json",
        'Authorization' : "INNOVATED"
      })
    });
    
  }


}