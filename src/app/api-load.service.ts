import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiLoadService {

  constructor(private httpClient: HttpClient) { }


fetchData(){
 return this.httpClient.get(`https://petstore.swagger.io/v2/store/inventory`);
}
}
