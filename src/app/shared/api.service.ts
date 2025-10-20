import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  host: string = "http://localhost:8000"
  constructor(private http: HttpClient) { }

  getShipments(){
    const url = this.host + "/api/shipments"
    return this.http.get(url)
  }

  addShipment(data: any){
    const url = this.host + "/api/shipments"
    return this.http.post(url, data)
  }
}
