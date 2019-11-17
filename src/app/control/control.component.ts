import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  controlActive :boolean=false;

  constructor(private appareilService : AppareilService) { }

  activerControl(){
    this.controlActive=!this.controlActive;
  }

  ngOnInit() {
  }

  onAllumer(){
    this.appareilService.switchOnAll();
  }
  
  onEtteindre(){
    if (confirm('Etes vous sur ?')){
    this.appareilService.switchOffAll();
    }
    else return null;
  }

  onConnecter(){
    this.appareilService.switchOnAllEtat();
  }

  onDeconnecter(){
    this.appareilService.switchOffAllEtat();

  }

}
