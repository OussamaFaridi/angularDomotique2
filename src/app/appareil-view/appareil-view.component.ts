import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

lastUpdate = new Promise(
(resolve,reject) => {
  const date = new Date();
  setTimeout(
    () => {
      resolve(date);
    },2000
  );
} 
);

appareils : any[];
appareilSubscription: Subscription;

onAllumer(){
  this.appareilService.switchOnAll();
}

onEtteindre(){
  if (confirm('You sure dude ?')){
  this.appareilService.switchOffAll();
  }
  else return null;
}


  constructor(private appareilService : AppareilService){
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );

  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

}
