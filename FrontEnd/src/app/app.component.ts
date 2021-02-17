import { Component, OnInit } from '@angular/core';
 import { AgmCoreModule } from '@agm/core';
import {MapService} from './map.service'

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restaurants Map';

  public RestaurantsList: any;
  lat = 25.28225261515831;
    lng = 55.327898789811435;


  constructor(private mapServer:MapService){


  };
  ngOnInit()
  {
    console.log("Start Calling");
    this.mapServer.GetListOfRes().subscribe(data => {
      this.RestaurantsList=data;
    });




  }



  }


