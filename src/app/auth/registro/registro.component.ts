import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent  {

  public registerForm = this.fb.group({
    nombre:['Brandon', Validators.required],
    email:['hola@gmail.com', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  crearUsuario(){
    console.log(this.registerForm.value)
  }

}
