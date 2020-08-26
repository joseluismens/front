import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pesaje} from '../models/pesaje';
import {Global} from '../global';
@Injectable({
  providedIn: 'root'
})
export class PesajeService {
  public url:string;

  constructor(private http:HttpClient) { 
    this.url=Global.url;
  }

  public selectPesaje:Pesaje={
      _id:null,
      nombre:'',
      rut:'',
      razonSocial:'',
      pesoEntrada:'',
      pesoSalida:'',
      tipoTransaccion:'',
      patente:'',
      tipoVehiculo:''

    }

  guardarPesaje(pesaje:any):Observable<any>{
    let params=JSON.stringify(pesaje);
    let headers= new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url+'pesajes',params,{headers:headers})

     
  }
  obtenerPesajes():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.url+'pesajes',{headers:headers})
  }
  deletePesaje(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url+'pesaje/'+id,{headers:headers});

  }
  updatePesaje(id:string,pesaje:any){
    let params=JSON.stringify(pesaje);
    let headers= new HttpHeaders().set('Content-Type','application/json');

    return this.http.put(this.url+'pesaje/'+id,params,{headers:headers});


  }
  getPesaje(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this.http.get(this.url+'pesaje/'+id, {headers: headers});
	}
  
  
}