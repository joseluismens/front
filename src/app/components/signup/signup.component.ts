import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formSignup:FormGroup;
  constructor(private authService:AuthService, private router:Router, private formBuilder:FormBuilder) {
      this.formSignup=this.formBuilder.group({
        name:['',[Validators.required]],
        email:['',[Validators.required]],
        password:['',[Validators.required]]
      })

  }
  ngOnInit(): void {
  }
  signup(){
    this.authService.signup(this.formSignup.value).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token-auth',res.token);
        Swal.fire({
          title:'Felicidades se ha registrado exitosamente !!',
          icon:'success'
        });
        setTimeout(()=>{this.router.navigate(['/signin'])},2000)
        

        
      },
      err=>{
        Swal.fire({
          title:`${err.error}`,
          icon:'error'
        })
        
      }
    );
    }  

}
