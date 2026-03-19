import { HttpClient } from '@angular/common/http';
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

  loading:boolean = false;
  error:String =  '';
  success: string =  '';

  constructor(
    private fb:FormBuilder,
    private http: HttpClient,
  ){
    this.addProForm= this.fb.group({
      name:[ '', [Validators.required]],
      price: [0, [Validators.min(0)]],
      category: '',
    })
  }
  submitForm(){
    this.loading = false
    this.error = '';
    this.success='';
    console.log(this.addProForm.value);
    const data = this.addProForm.value;
    this.http.post('http://localhost:3000/products', data).subscribe({
      next:()=>{
        this.loading= false;
        // this.success = 'Thêm thành công';
        this.addProForm.reset() ; 
        alert('Thêm mới thành công');
      },
      error: ()=>{
        this.loading= false;
        // this.error = 'có lỗi sảy ra';
        alert('Thêm mới thất bại')
      }
    })
  }
}
