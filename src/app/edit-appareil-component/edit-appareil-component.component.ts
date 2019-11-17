import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-appareil-component',
  templateUrl: './edit-appareil-component.component.html',
  styleUrls: ['./edit-appareil-component.component.scss']
})
export class EditAppareilComponentComponent implements OnInit {

  defaultOnOff = 'éteint';


  constructor(private appareilService: AppareilService,
    private router: Router) { }


  ngOnInit() {
  }


  test(){
    
  }
 
  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const status = form.value['status'];
    const emplacement = form.value['emplacement'];
    const etat = form.value['etat'];


    this.appareilService.addAppareil(name,emplacement,status,etat);
    this.router.navigate(['/appareils']);
  }

}
