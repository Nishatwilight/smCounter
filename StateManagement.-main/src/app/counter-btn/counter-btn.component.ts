import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrements, increments, reset } from '../state/counter.actions';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-btn',
  templateUrl: './counter-btn.component.html',
  styleUrls: ['./counter-btn.component.scss']
})
export class CounterBtnComponent {

  constructor(private store: Store<{count: counterState}>){

  }
  
  increment(){
this.store.dispatch(increments())
  }
  decrement(){
this.store.dispatch(decrements())
  }
  reset(){
this.store.dispatch(reset())
  }
}
