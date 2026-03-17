import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  register: FormGroup;
  constructor(private fb: FormBuilder){
    this.register= this.fb.group({
      username:['' ,[Validators.required]],
      email:['' ,[Validators.required]],
      password:['' ,[Validators.required, Validators.minLength(6)]],
    })
  }
   get username(){
    return this.register.get('username');
  }

  get gmail(){
    return this.register.get('gmail');
  }

  get password(){
    return this.register.get('password');
  }
  submitForm(){
    console.log(this.register.value);
  }
}
