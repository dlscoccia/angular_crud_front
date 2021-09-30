import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModalDismissReasons,NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {


  constructor(private _http:HttpClient,
              
    ) { }
  // connect frontend to backend
  apiUrl='https://crud-ts-mysql.herokuapp.com/movies';
  
  //get all data

  getAllData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  };
  //create data
  createData(data:any):Observable<any>
  {
    console.log(data,'createapi==>')
    return this._http.post(`${this.apiUrl}`,data);
  };

  // delete data
  deleteData(id:any):Observable<any>
  {
    return this._http.delete(`${this.apiUrl}/${id}`)
  };

    // update data
    updateData(data:any,id:any):Observable<any>
    {
      return this._http.put(`${this.apiUrl}/${id}`,data)
    }


    //get single data
    getSingleData(id:any):Observable<any>
    {
      
      return this._http.get(`${this.apiUrl}/${id}`)
    }
  
}
