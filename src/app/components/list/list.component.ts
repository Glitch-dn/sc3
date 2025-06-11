import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post, PostCategory, PostResponse } from '../../model/post';
import { CommonModule } from '@angular/common';
import { PostComponent } from "../post/post.component";

@Component({
  imports: [CommonModule, PostComponent],
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts: Post[] = [];
  selectedCategory: PostCategory | null = null;
  posts_filtered: Post[] = [];
  categories: PostCategory[] = [];
  post_service: PostService = inject(PostService);

  ngOnInit(): void {
    this.post_service.getPosts().subscribe((response: PostResponse) => {
      this.posts = response.posts;
      this.categories = response.postCategories;
    });
  }

  cambiaCategoria(categories: PostCategory, event: MouseEvent) {
    this.selectedCategory = categories;
    this.posts_filtered = this.post_service.filtraPerCategoria(this.posts, categories);
    const buttons = document.querySelectorAll('.category-button');
    buttons.forEach(button => button.classList.remove('active'));
    
  }
}