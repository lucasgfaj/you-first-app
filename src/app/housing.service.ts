import { Injectable } from '@angular/core';
import {HousingLocation} from './housinglocation';
import { HomeComponent } from './home/home.component';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  housingLocationList: any;

  constructor() { }
 
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation: { id: number; }) => housingLocation.id === id);
  }
}
