import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) {   }


  GetListOfRes()
  {


    return this.http.get('http://localhost:3000/');
  }
}
