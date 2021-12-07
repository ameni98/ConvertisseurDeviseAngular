import { Component, OnInit } from '@angular/core';
import currencymap from './../assets/currencymap.json';
import { ConvertionDeviseService } from './convertion-devise.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   currencyList = []; 
   result;
   valFrom;
   valTo;
   constructor(private converDevise:ConvertionDeviseService){}
  ngOnInit(): void { 
    //mettre les devises de fichier json dans un tableau cuurencyList
    for (let element  in currencymap) {  
      this.currencyList.push({'name':currencymap[element].name,
      'code':currencymap[element].code
      
    })
  }}
  change()
  {console.log(this.valFrom);
let x=this.valFrom;
this.valFrom=this.valTo;
this.valTo=x;

  }
  //faire la conversion
  convertir(form)
  {
    //appel au service conversiodevise et à la méthode convertir en passant les code de devise
    this.converDevise.convertir(form['selectInit'],form['selectFinale'])
    .subscribe(
    (res)=>
    {//récupération de valeur sous form json {"EUR_USD":1.130538} et je récupére le nombre
      this.result=res[form['selectInit']+"_"+form['selectFinale']]*form['nombre'];
      console.log(res);
    },
    (err)=>{
      console.log(err);
    })
    
  }
}


