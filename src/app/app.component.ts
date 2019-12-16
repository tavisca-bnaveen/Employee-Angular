import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './EmployeeInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeExpress';
  id=1;
  name="naveen";
  email="bnaveen@tavisca.com";
  EmployeeData:IEmployee[]=null;
  Error:string=""
  constructor(private employeeService:EmployeeService){}
  ngOnInit(){
    
    this.render();
   
  }
  deleteEvent(event){
   this.render();
  }
  render(){
    this.employeeService.GetAllEmployees().subscribe(
      data =>{
        this.EmployeeData=data;
      },
      error =>{
        this.Error=error;
      }
    )
  }
}
