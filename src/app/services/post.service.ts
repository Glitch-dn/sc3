import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post, PostCategory, PostResponse } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  preferiti: Post[] = [];
  selectedCategory: PostCategory | null = null;
  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get<PostResponse>('blog.json');
  }
  aggiungiPreferito(post: Post) {
    if (!this.preferiti.includes(post)) {
      this.preferiti.push(post);
    }
  }
  rimuoviPreferito(post: Post) {
    this.preferiti = this.preferiti.filter(p => p !== post);
  }

  filtraPerCategoria(posts: Post[], category: PostCategory): Post[] {
    if (category.title !== 'Tutti') {
      return posts.filter(post => post.category === category.id);
    } else {
      return [];
    }
  }
}
