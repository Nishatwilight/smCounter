import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { getCounter } from '../state/counter.selector';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent {
  number!: number
  constructor(private store: Store<{count: counterState}>){
    
  }
  ngOnInit(){
    this.store.select(getCounter).subscribe(countergoal =>{
      console.log('Counter Works');
      this.number = countergoal;
    })
  
  }
}

