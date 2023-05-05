import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import {  addingTheValueS, channelNameModify } from '../state/counter.actions';
import { getAppName } from '../state/counter.selector';


@Component({
  selector: 'app-cus-count',
  templateUrl: './cus-count.component.html',
  styleUrls: ['./cus-count.component.scss']
})
export class CusCountComponent implements OnInit {

  value!: number
  appname!: string
constructor(private store: Store<{count: counterState}>){

}
  ngOnInit(): void {
    this.store.select(getAppName).subscribe((appData)=>{
      console.log('App Works');
      
      this.appname = appData
    })
  }
ngOninit(){

}

AddValue() {
  console.log(this.value);
  this.store.dispatch(addingTheValueS({ valueData: +this.value }  ));
}
channelChange(){
  this.store.dispatch(channelNameModify())
}
}
