import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  addProForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.addProForm= this.fb.group({
      name:[ '', [Validators.required]],
      price: [0, [Validators.min(0)]],
      category: '',
    })
  }
  submitForm(){
    console.log(this.addProForm.value);
  }
}
