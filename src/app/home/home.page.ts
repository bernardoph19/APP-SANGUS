import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { LoginserviceService } from 'src/app/services/loginservice.service'; 
import { finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { Pedido } from './pedido.model';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  listaPedido : Pedido[];
  //listaPedido : any[] = [];

  constructor(
    private loginService: LoginserviceService, 

  ) {}


  ngOnInit() : void {
    const userlogueado = JSON.parse(localStorage.getItem('userLogueado'));
    
    const rep = {
      'idusuario' : userlogueado.id
    };

    this.loginService.listarPendientesToday(rep)
    .subscribe( (r : any) => {

      if( r.message === "exito" ){
                
        this.listaPedido  = r.result;        
      }            

    });

  }





}
