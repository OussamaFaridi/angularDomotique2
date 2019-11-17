import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

@Input() appareilName: String;
@Input() appareilStatus: String;
@Input() appareilEmplacement: String;
@Input() appareilEtat: String;

@Input() index:number;
@Input() id:number;




constructor(private appareilService : AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor(){
    if (this.appareilStatus==='éteint'){
      return 'red';
    }
    else if (this.appareilStatus==='allumé')
    {
      return 'green';
    }
  }

  onSwitch(){
    
    
    if(this.appareilEtat==='déconnecté'){
      alert("Vous devez d'abord connecter l'appareil");
      
    }


else if (this.appareilEtat==='connecté'){
    if(this.appareilStatus==='éteint'){
    this.appareilService.switchOnOne(this.index);
    }
    else if(this.appareilStatus==='allumé'){
      this.appareilService.switchOffOne(this.index);
      }
    }
    
  }

  onSwitchEtat(){
    if(this.appareilEtat==='déconnecté'){
    this.appareilService.switchOnOneEtat(this.index);
    }
    else if(this.appareilEtat==='connecté'){
      this.appareilService.switchOffOneEtat(this.index);
      }
    
  }
  



}
