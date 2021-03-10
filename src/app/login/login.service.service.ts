import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import {mdUser} from 'src/app/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  respuesta: {};

  constructor(
    private http: HttpClient,
    private loadingCtrl: LoadingController 
  ) { }

  async postInicioSesion(body : mdUser){
  
    /* let credenciales = {
            "usuario": usu,
            "password": pass
    } */
    
    /* let pd = JSON.stringify(credenciales); */

    let loading = await this.loadingCtrl.create();
    await loading.present();        
    
    let nativeCall = this.http.post('https://agustin.innovated.xyz/api/seguridad/usuario/iniciosesion', body, {               
      headers: new HttpHeaders({
        'Content-Type'  : "application/json",
        'Authorization' : "INNOVATED"

      })
    });

    from(nativeCall).pipe(
      finalize( () => loading.dismiss() )
    )

    .subscribe(data => {    
      this.respuesta = Object.values(data);
      console.log(this.respuesta);
      
    }, error => {       
      alert('Ocurrio un error Inesperado : ' + JSON.stringify(error.error));
    });    
    
  }

}
