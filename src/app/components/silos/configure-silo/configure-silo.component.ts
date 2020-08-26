import { Component, OnInit } from '@angular/core';
import { SiloService } from 'src/app/services/silo.service';
import { Silo } from 'src/app/models/silos';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-configure-silo',
  templateUrl: './configure-silo.component.html',
  styleUrls: ['./configure-silo.component.css']
})
export class ConfigureSiloComponent implements OnInit {
  formSilo:FormGroup;
  silos:Silo=[];
  guardarId:string;
  constructor(private siloService:SiloService,
    private formBuilder:FormBuilder){ 
      this.formSilo=this.formBuilder.group({
        nombre:['',[Validators.required]],
        capacidadTotal:['',[Validators.required]],
        stock:['',[Validators.required]],
        tipoProducto:['',[Validators.required]],
        estado:['',[Validators.required]]
      })
    }

  ngOnInit(): void {
    this.obtenerSilos()
  }
  obtenerSilos(){
    this.siloService.getSilos()
      .subscribe(res => {
        this.silos = res;
        console.log(this.silos);
        
      }
        );
    
  }
  cargarDatos(silo:any, id:string){
    this.formSilo=this.formBuilder.group({
      nombre:silo.nombre,
      capacidadTotal:silo.capacidadTotal,
      stock:silo.stock,
      tipoProducto:silo.tipoProducto,
      estado:silo.estado
    }) 
    this.guardarId=id;
 
     


  }
  deleteSilo(id:string){
    this.siloService.deleteSilo(id).subscribe(
      (res)=>{
        console.log(res);
        this.obtenerSilos();
        
      }
    )
  }
  onSubmit(){
    this.siloService.updateSilo(this.guardarId,this.formSilo.value).subscribe(
      res=>{
        this.obtenerSilos();
        document.getElementById('updateSilo').click();
        
    })
    
  }
  

}
