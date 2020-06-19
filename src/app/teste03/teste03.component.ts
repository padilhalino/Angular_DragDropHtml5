import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste03',
  templateUrl: './teste03.component.html',
  styleUrls: ['./teste03.component.css']
})
export class Teste03Component implements OnInit {

  qtdeDias: number = 31;
  qtdeRecursos: number = 5;
  qtde15Minutos: number = 96; // 4 * 24 >> 4 x 15 minutos/horas * 24 horas
  arrayDia: any[];

  constructor() { }

  ngOnInit() {
    this.arrayDia = [];
    for(var i = 0; i < (this.qtde15Minutos * this.qtdeDias); i++) {
      this.arrayDia.push({ id: i, hora: "00:00"});
    }
  }
  
  allowDrop(ev: any) {
    ev.preventDefault();
  }

  drag(ev: any) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev: any) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

}
