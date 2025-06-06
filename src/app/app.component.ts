import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { FavoritesComponent } from "./components/favorites/favorites.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListComponent, FavoritesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sc3';

  reload(){
    window.location.reload();
  }
}
