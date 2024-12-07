import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverURL:string= "https://employeeserverangular.onrender.com"
  constructor(private http:HttpClient) {}
  getEmployeeApi(){
    return this.http.get(`${this.serverURL}/employees`)
  }
  getSingleEmployeeApi(id:string){
    return this.http.get(`${this.serverURL}/employees/${id}`)
  }
  addEmployeeApi(reqbody:any){
    return this.http.post(`${this.serverURL}/employees`,reqbody)
  }
  updateEmployeeApi(reqbody:any,id:string){
    return this.http.put(`${this.serverURL}/employees/${id}`,reqbody)
  }
  deleteEmployeeApi(id:string){
    return this.http.delete(`${this.serverURL}/employees/${id}`)
  }
}
