import { Component, OnInit } from '@angular/core';
import { SiloService } from 'src/app/services/silo.service';
import { Silo } from 'src/app/models/silos';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-list-silos',
  templateUrl: './list-silos.component.html',
  styleUrls: ['./list-silos.component.css']
})
export class ListSilosComponent implements OnInit {
  silos:Silo=[];
  constructor(private siloService:SiloService) { 

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
  
}
