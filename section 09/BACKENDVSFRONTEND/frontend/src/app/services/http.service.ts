import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technology } from '../models/technology.model';
import { environment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly _http: HttpClient) { }
  
  public getTechnologies() {
    return this._http.get<Technology[]>(this.baseUrl + "/technologies");
  }
  
  public getTechnology(id: string) {
    return this._http.get<Technology>(this.baseUrl + "/technology/" + id);
  }
  
  public searchTechnology(query: string) {
    return this._http.get<Technology>(
      this.baseUrl + "/technology/search/" + query
      );
  }
  
}
