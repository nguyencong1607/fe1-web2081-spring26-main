import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface Story {
  id: number;
  title: string;
  author: string;
  view: number;
}

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './stories.html',
  styleUrls: ['./stories.css'],
})
export class Stories implements OnInit {
  stories: Story[] = [];

  loading = false;
  error = '';

  private apiUrl = 'http://localhost:3000/stories';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.loading = true;
    this.error = '';

    this.http.get<Story[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.loading = false;
        this.stories = data;
      },
      error: () => {
        this.loading = false;
        this.error = 'Không thể tải dữ liệu';
      },
    });
  }

  deleteStory(id: number) {
    const confirmDelete = confirm('Bạn có chắc chắn xóa không?');
    if (!confirmDelete) return;

    this.http.delete(`${this.apiUrl}/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        alert('Xóa thành công');
      },
      error: () => {
        alert('Xóa thất bại');
      },
    });
  }

  EditStory(id: number) {
    this.router.navigate(['/edit', id]);
  }
}