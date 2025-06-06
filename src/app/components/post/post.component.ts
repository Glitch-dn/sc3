import { Component, inject, Input } from '@angular/core';
import { Post } from '../../model/post';
import { DatePipe } from '@angular/common';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  imports: [DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input()
  post?: Post;

  pService: PostService = inject(PostService);

  aggiungiPreferito(event: Event){
    this.pService.aggiungiPreferito(this.post!);
  }

}
