import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post.service';
import { SlicePipe } from '@angular/common';
import { Post } from '../../model/post';

@Component({
  selector: 'app-favorites',
  imports: [SlicePipe],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  pService: PostService = inject(PostService);
}
