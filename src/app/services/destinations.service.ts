import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DestinationsService {
    url:string = "https://api.myjson.com/bins/17v3ly";
    constructor(private http:HttpClient) { }
    getDestination(){
        return this.http.get( this.url ).map( response => response);
    }
}
