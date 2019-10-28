import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'platziSquare';
  a= 3;
  b=5;
  listo:boolean = false;
  name:string = '';
  people:any = [
    {plan: 'pagado',cercania: 1,distancia: 10,age: 18,'name':'Miguel'},
    {plan: 'gratuito',cercania: 1,distancia: 1.8,age: 15,'name':'Carlos'},
    {plan: 'gratuito',cercania: 2,distancia: 5,age: 18,'name':'Angelica'},
    {plan: 'pagado',cercania: 3,distancia: 10,age: 18,'name':'Martha'},
    {plan: 'gratuito',cercania: 3,distancia: 35,age: 15,'name':'Cristian'},
    {plan: 'gratuito',cercania: 3,distancia: 120,age: 12,'name':'Manuela'}];
  lat: number = 19.1480038;
  lng:number= -98.787209;



  constructor(){
    setTimeout(()=>{
      this.listo = true;
    }, 3000);
  }

  doSomething(){
    alert("Event Biding");
    console.log(this.name);
  }

  
}
