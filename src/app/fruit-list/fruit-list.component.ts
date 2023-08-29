import { Component, OnInit } from '@angular/core';
import { ApiLoadService } from '../api-load.service';


@Component({
  selector: 'app-fruit-list',
  templateUrl: './fruit-list.component.html',
  styleUrls: ['./fruit-list.component.css']
})
export class FruitListComponent implements OnInit{

  selectedNumber: number|null = null;

  fruitsData:any = [
    { name: "Apple", value: 10 },
    { name: "Banana", value: 5 },
    { name: "Orange", value: 5 },
    { name: "Mango", value: 40 },
    { name: "Grapes", value: 12 },
    { name: "Pineapple", value: 8 },
    { name: "Kiwi", value: 10 },
    { name: "Cherry", value: 7 },
    { name: "Pear", value: 3 },
  ];

  constructor(private apiloadServioce: ApiLoadService){}

  onDisplayNumber(value:any){

    this.selectedNumber = this.fruitsData[value];
    //this.selectedNumber= value;
  }

  ngOnInit() {
 this.apiloadServioce.fetchData().subscribe((response)=>{
  this.fruitsData=response;
 })

  }

  getJsonKeys() {
    return Object.keys(this.fruitsData);
  }

}
