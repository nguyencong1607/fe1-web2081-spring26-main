import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-story',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-story.html',
  styleUrl: './edit-story.css',
})
export class EditStory implements OnInit {
  editForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  id: string | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.editForm = this.fb.group({
      title: '',
      author: '',
      view: 0,
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id) {
      this.http.get(`http://localhost:3000/stories/${this.id}`).subscribe({
        next: (data: any) => {
          this.editForm.patchValue({
            title: data.title,
            author: data.author,
            view: data.view,
          });
        },
        error: () => {
          this.error = 'Không load được dữ liệu';
        },
      });
    }
  }

  submitForm() {
    if (!this.id) return;

    this.loading = true;
    this.error = '';
    this.success = '';

    const data = this.editForm.value;

    this.http.put(`http://localhost:3000/stories/${this.id}`, data).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Cập nhật thành công';
        this.router.navigateByUrl('/stories');
      },
      error: () => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra';
      },
    });
  }
}