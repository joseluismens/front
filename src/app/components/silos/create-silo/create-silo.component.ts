import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SiloService } from 'src/app/services/silo.service';

@Component({
  selector: 'app-create-silo',
  templateUrl: './create-silo.component.html',
  styleUrls: ['./create-silo.component.css']
})
export class CreateSiloComponent implements OnInit {
  formSilo:FormGroup;

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
  }
  onSubmit(){
    console.log(this.formSilo.value);
    
    this.siloService.createSilo(this.formSilo.value)
      .subscribe( (data)=>{
        console.log("imprimiendo resultado");
        console.log(data)
        this.formSilo.reset();
    
    });
  }

}
