import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste01',
  templateUrl: './teste01.component.html',
  styleUrls: ['./teste01.component.css']
})
export class Teste01Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

}
