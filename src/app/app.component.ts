import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './EmployeeInfo';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { EditdialogboxComponent } from './editdialogbox/editdialogbox.component';

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
  Edit=true;
  EmployeeData:IEmployee[]=null;
  Error:string=""
  constructor(private employeeService:EmployeeService,private dialog:MatDialog){}
  ngOnInit(){
    
    this.employeeService.GetAllEmployees().subscribe(
      data =>{
        this.EmployeeData=data;
        
      },
      error =>{
        this.Error=error;
      }
    )
   
  }
  deleteEvent(event){
    console.log("hi from event");
    
    this.employeeService.GetAllEmployees().subscribe(
      data =>{
        this.EmployeeData=data;

      },
      error =>{
        this.Error=error;
      }
    )
  }
  AddEmployee(){
    this.employeeService.CreateEmployee().subscribe(
      data =>{
        this.EmployeeData=data;
        console.log(data)
      },
      error =>{
        this.Error=error;
      }
    )
  }
  
}
