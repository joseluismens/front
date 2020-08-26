import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiloService {

  public url:string

  constructor(private http:HttpClient) {
    this.url=Global.url;
   }



  getSilos():Observable<any>{
    let headers= new HttpHeaders().set('Content-Type','application/json');
    return this.http.get(this.url+'silos',{headers:headers});

  }
  createSilo(silo:any):Observable<any>{
    let params =JSON.stringify(silo);
    let headers= new HttpHeaders().set('Content-Type','application/json');
    return this.http.post(this.url+'silos',params,{headers:headers});
  }
  deleteSilo(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete(this.url+'silos/'+id,{headers:headers});

  }
  updateSilo(id:string,silo:any){
    let params=JSON.stringify(silo);
    let headers= new HttpHeaders().set('Content-Type','application/json');

    return this.http.put(this.url+'silos/'+id,params,{headers:headers});


  }
  getSilo(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this.http.get(this.url+'silos/'+id, {headers: headers});
	}

}


