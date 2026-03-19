import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

    loading = false;
    error = '';
    success = '';
   constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ){
    this.addForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required, Validators.minLength(3)]],
      views: [0],
    })
   }
   submitForm(){
    console.log('Form',this.addForm.value);
    const data = this.addForm.value;
    this.http.post(' http://localhost:3000/story',data).subscribe({
      next: () =>{
        this.loading = false;
        // this.success = 'Thêm thành công';
        this.addForm.reset();
        alert('thêm mới thành công');
      },
      error: ()=>{
        alert('thêm mới thất bại')
        this.loading = false;
        // this.error = 'Có lỗi sảy ra'
      }
    })
   }
}
