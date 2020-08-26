import { Component, OnInit } from '@angular/core';
import { Pesaje } from 'src/app/models/pesaje';
import { PesajeService } from 'src/app/services/pesaje.service';
import {Global} from '../../../global';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-deshabilitar-pesaje',
  templateUrl: './deshabilitar-pesaje.component.html',
  styleUrls: ['./deshabilitar-pesaje.component.css']
})
export class DeshabilitarPesajeComponent implements OnInit {
  public pesajes:Pesaje[]=[];
  public url:string;
  formPesaje:FormGroup;
  guardarId:string;

  constructor(private pesajeService:PesajeService, private formBuilder:FormBuilder ){
    this.url=Global.url;
    this.formPesaje=this.formBuilder.group({
      nombre:['',[Validators.required]],
      rut:['',[Validators.required]],
      razonSocial:['',[Validators.required]],
      pesoEntrada:['',[Validators.required]],
      pesoSalida:['',[Validators.required]],
      tipoTransaccion:['',Validators.required],
      patente:['',Validators.required],
      tipoVehiculo:['',Validators.required],

   })
   }

  ngOnInit(): void {
    this.getPesajes();
  }
  getPesajes(){
    this.pesajeService.obtenerPesajes().subscribe(
      response=>{
        if(response){
          this.pesajes=response;
          console.log(this.pesajes);
          
        }
      },error=>{
        console.log(<any>error);
        
      }
    )
  }
  eliminar(id:any){
    this.pesajeService.deletePesaje(id).subscribe(
      res=>{
        console.log(res);
        this.getPesajes();
 
      }
    )

  }

  cargarDatos(pesaje:any, id:string){
    this.formPesaje=this.formBuilder.group({
      nombre:pesaje.nombre,
      rut:pesaje.rut,
      razonSocial:pesaje.razonSocial,
      pesoEntrada:pesaje.pesoEntrada,
      pesoSalida:pesaje.pesoSalida,
      tipoTransaccion:pesaje.pesoSalida,
      patente:pesaje.patente,
      tipoVehiculo:pesaje.tipoVehiculo
    }) 
    this.guardarId=id;
 
     


  }
  onSubmit(){
    this.pesajeService.updatePesaje(this.guardarId,this.formPesaje.value).subscribe(
      res=>{
        this.getPesajes();
        document.getElementById('updatemodal').click();
        
    })
    
  }
  
}
