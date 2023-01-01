import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seatmatrix',
  templateUrl: './seatmatrix.component.html',
  styleUrls: ['./seatmatrix.component.css']
})
export class SeatmatrixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var x = this.getElement("8")
    console.log(x)
  }

  getElement(id:string)
  {
    var value = document.getElementById("8")
    return(value);
  }
}

