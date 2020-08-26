import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,FormControl, Validators} from '@angular/forms';
import { PesajeService } from 'src/app/services/pesaje.service';
@Component({
  selector: 'app-nuevo-pesaje',
  templateUrl: './nuevo-pesaje.component.html',
  styleUrls: ['./nuevo-pesaje.component.css']
})
export class NuevoPesajeComponent implements OnInit {

  formPesaje:FormGroup;

  constructor(private pesajeService:PesajeService, private formBuilder:FormBuilder) { 
    this.formPesaje=this.formBuilder.group({
       nombre:['',[Validators.required]],
       rut:['',[Validators.required]],
       razonSocial:['',[Validators.required]],
       pesoEntrada:['',[Validators.required]],
       pesoSalida:['',[Validators.required]],
       tipoTransaccion:['',[Validators.required]],
       patente:['',[Validators.required,Validators.maxLength(6)]],
       tipoVehiculo:['',[Validators.required]],

    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.pesajeService.guardarPesaje(this.formPesaje.value).
      subscribe(
        (data)=>{
          console.log("imprimiendo resultado");
          console.log(data)
          this.formPesaje.reset();
      
      })
    
  }
  

}
