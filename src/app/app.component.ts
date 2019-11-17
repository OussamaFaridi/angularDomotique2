import { Component,OnInit, OnDestroy } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'url';
import { AppareilService } from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'mon-projet-angular';

  appareilOne = 'Machine à laver';
  appareilTwo = 'Frigo';
  appareilThree = 'Ordinatueur';
  secondes: number;
  counterSubscription: Subscription;





constructor(){}

ngOnInit() {
  const counter = Observable.interval(1000);
  counter.subscribe(
    (value) => {
      this.secondes = value;
    }
  );
}

ngOnDestroy(){
  this.counterSubscription.unsubscribe();
}


}
