import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterBtnComponent } from './counter-btn/counter-btn.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { CusCountComponent } from './cus-count/cus-count.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { postReducer } from './post/postState/post.reducer';
import { appReducer } from './appState/app.state';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterBtnComponent,
    CusCountComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    FormsModule,
    StoreDevtoolsModule.instrument({
      // maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
