import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/appState/app.state';
import { PostState } from '../postState/post.state';
import { postVal } from '../postState/post.selector';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
 posts!: any;

 constructor(private store: Store<AppState>){
 }
 ngOnInit(){
 this.posts =  this.store.select(postVal)
 console.log('this.post', this.posts);
 
 }
}
