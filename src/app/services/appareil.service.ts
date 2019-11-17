import { Subject } from 'rxjs/Subject';

export class AppareilService{

  appareilsSubject = new Subject<any[]>();
 
   private appareils = [
        {
          id:1,
          name : 'Machine à laver',
          emplacement : 'cuisine',
          status : 'éteint',
          etat :  'connecté'
        },
        {
          id:2,
          name : 'Frigo ',
          emplacement : 'chambre 1',
          status : 'éteint',
          etat :  'déconnecté'
        },
        {
          id:3,
          name : 'TV',
          emplacement : 'chambre 2',
          status : 'éteint',
          etat :  'connecté'
        }
      ]

      allAppareilsOn:boolean=true;

      emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());
      }
    

      getAppareilById(id:number)
      {
        const appareil = this.appareils.find( (appareilObject) =>  {return appareilObject.id===id});
        return appareil;
      }

      switchOnAll()
      {

        for (let appareil of this.appareils)
          {
            if(appareil.etat==='connecté')
               this.allAppareilsOn=false;
          }


        
        if(this.allAppareilsOn===false)
        {
          alert("Veillez connecter tout les appareils")
        }


          else {
          for (let appareil of this.appareils)
          {
                appareil.status = 'allumé';
          }
          this.emitAppareilSubject();
        }
      }

      switchOffAll()
      {
          for (let appareil of this.appareils)
          {
                appareil.status = 'éteint';
          }
          this.emitAppareilSubject();
      }
      // deco co all
      switchOnAllEtat()
      {
          for (let appareil of this.appareils)
          {
                appareil.etat = 'connecté';
          }
          this.emitAppareilSubject();
      }

      switchOffAllEtat()
      {
          for (let appareil of this.appareils)
          {
                appareil.status = 'éteint';
                appareil.etat = 'déconnecté';
          }
          this.emitAppareilSubject();
      }




////////////////
      switchOnOne(i:number)
      {
          this.appareils[i].status = 'allumé';
          this.emitAppareilSubject();
      }

      switchOffOne(i:number)
      {
          this.appareils[i].status = 'éteint';
          this.emitAppareilSubject();
      }
///////////////////////////////////////
      switchOnOneEtat(i:number)
      {
          this.appareils[i].etat = 'connecté';
          
          this.emitAppareilSubject();
      }

      switchOffOneEtat(i:number)
      {
          this.appareils[i].etat = 'déconnecté';
          this.appareils[i].status = 'éteint';
          this.emitAppareilSubject();
      }


      


      addAppareil(name: string,emplacement:string, status: string, etat:string) {
        const appareilObject = {
          id: 0,
          name: '',
          emplacement: '',
          status: '',
          etat:''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.emplacement = emplacement;
        appareilObject.etat = etat;



        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;
        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }

}