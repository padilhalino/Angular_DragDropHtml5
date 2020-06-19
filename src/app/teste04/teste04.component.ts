import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-teste04',
  templateUrl: './teste04.component.html',
  styleUrls: ['./teste04.component.css']
})
export class Teste04Component implements OnInit {

  qtdeDias: number = 31;
  qtdeRecursos: number = 5;
  qtde15Minutos: number = 96; // 4 * 24 >> 4 x 15 minutos/horas * 24 horas
  arrayDia: any[];
  
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.arrayDia = [];
    
    var target = document.getElementById("target");

    for (var i = 0; i < (this.qtde15Minutos * this.qtdeDias); i++) {
    //for (var i = 0; i < (this.qtdeDias); i++) {
      this.arrayDia.push({ id: i, hora: "00:00" });
      // <div id="exemplo" class="minuto" (drop)="drop($event)" (dragover)="allowDrop($event)"></div>
      var child = document.createElement('div');
      this.renderer.addClass(child, 'minuto');
      this.renderer.listen(child, "drop", this.drop);
      this.renderer.listen(child, "dragover", this.allowDrop);
      this.renderer.appendChild(target, child);
    }
  }
  
  allowDrop(ev: any) {
    //TODO: teste05
    // http://jsfiddle.net/robertc/kKuqH/30/
    //console.log(ev.clientX);
    //console.log(ev.clientY);

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
