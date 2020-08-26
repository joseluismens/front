import { Component, OnInit } from '@angular/core';
import { PesajeService } from 'src/app/services/pesaje.service';
import { Pesaje } from 'src/app/models/pesaje';
import { Global } from '../../../global';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-listar-pesajes',
  templateUrl: './listar-pesajes.component.html',
  styleUrls: ['./listar-pesajes.component.css'],
  providers: [PesajeService]
})
export class ListarPesajesComponent implements OnInit {
  public pesajes: Pesaje[];
  public url: string;
  formPesaje: FormGroup;
  details: FormGroup;

  constructor(private pesajeService: PesajeService, private formBuilder: FormBuilder) {
    this.url = Global.url;
    this.formPesaje = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      rut: ['', [Validators.required]],
      razonSocial: ['', [Validators.required]],
      pesoEntrada: ['', [Validators.required]],
      pesoSalida: ['', [Validators.required]],
      tipoTransaccion: ['', Validators.required],
      patente: ['', Validators.required],
      tipoVehiculo: ['', Validators.required],

    })
    this.url = Global.url;

  }

  ngOnInit(): void {
    this.getPesajes();

    
  }
  getPesajes() {
    this.pesajeService.obtenerPesajes().subscribe(
      response => {
        if (response) {
          this.pesajes=response;
          console.log(response);
          
        }
      }, error => {
        console.log(<any>error);

      }
    )
  }
  cargarDatos(pesaje: any) {
    this.formPesaje = this.formBuilder.group({
      nombre: pesaje.nombre,
      rut: pesaje.rut,
      razonSocial: pesaje.razonSocial,
      pesoEntrada: pesaje.pesoEntrada,
      pesoSalida: pesaje.pesoSalida,
      tipoTransaccion: pesaje.pesoSalida,
      patente: pesaje.patente,
      tipoVehiculo: pesaje.tipoVehiculo
    });
  }
  cargarpdf(pesaje: any) {
    this.details = this.formBuilder.group({
      nombre: pesaje.nombre,
      rut: pesaje.rut,
      razonSocial: pesaje.razonSocial,
      pesoEntrada: pesaje.pesoEntrada,
      pesoSalida: pesaje.pesoSalida,
      tipoTransaccion: pesaje.pesoSalida,
      patente: pesaje.patente,
      tipoVehiculo: pesaje.tipoVehiculo
    });


  }
  VerPesaje(event: Event, pesaje: any) {
    event.preventDefault();
    this.cargarDatos(pesaje);
    
  }
 
}
