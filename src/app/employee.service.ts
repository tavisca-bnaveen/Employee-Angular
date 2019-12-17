import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './EmployeeInfo';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpclient:HttpClient) { }

  GetAllEmployees(){
    return this.httpclient.get<IEmployee[]>("http://localhost:1234/api/employees");
  }
  DeleteEmployee(id:string){
    return this.httpclient.delete("http://localhost:1234/api/employees/"+parseInt(id));
  }
  UpdateEmployee(name:string,email:string,id:string,edit:boolean){
    return this.httpclient.post("http://localhost:1234/api/employees/"+id,
    {
      "name":name,
      "email":email,
      "edit":edit
    });
  }
  CreateEmployee(){
    return this.httpclient.put<IEmployee[]>("http://localhost:1234/api/employees/",{});
  }
  EditStatus(id:string,edit:boolean){
    return this.httpclient.put<IEmployee[]>("http://localhost:1234/api/employees/"+id,{
      "edit":edit
    });
  }
}
