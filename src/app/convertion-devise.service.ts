import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"; 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertionDeviseService {
result;
constructor(private http:HttpClient) { }

public  convertir(from,to)
{//appel au lien d'api qui fait la conversion en passant le devise init vers le devise finale

 return this.http.get('https://free.currconv.com/api/v7/convert?q='+from+'_'+to+'&compact=ultra&apiKey=fa01fd8430a51ebea1a6')
 .pipe(map(result => this.result = result));
 

}
}
