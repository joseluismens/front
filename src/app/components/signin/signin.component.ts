import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  formSignin:FormGroup;

  constructor(private authService: AuthService, private router: Router,private formBuilder:FormBuilder) {
      this.formSignin=this.formBuilder.group({
        email:['',[Validators.required]],
        password:['',[Validators.required]]
      })
  }

  ngOnInit(): void {
  }
  signin() {
    this.authService.signin(this.formSignin.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('auth-token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        
          console.log(res);
          
        Swal.fire({
          title:"HAs iniciado sesión correctamente",
          icon:'success'
        })
        location.reload();
        setTimeout(() => {  
          this.router.navigate(['/home']);
      }, 2000);
        

      },
      err => {
        console.log(err);
            Swal.fire({
              title:`${err.error}`,
              icon: 'error'
            });

          
      }
    )



  }


}
