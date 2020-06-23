import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cars = [
    {
    brand: "Audi",
    type: "A7",
    color: "black",
    motor: "Petrol",
    km: 15000,
    img: "audi.jpg"
  },
    {
    brand: "BMW",
    type: "5er",
    color: "white",
    motor: "Petrol",
    km: 10000,
    img: "bmw.jpg"
  },
    {
    brand: "Tesla",
    type: "Model S",
    color: "red",
    motor: "Electro",
    km: 5000,
    img: "tesla.jpeg"
  },
]

  constructor() { 
  
  }

  ngOnInit(): void {
  }

}
