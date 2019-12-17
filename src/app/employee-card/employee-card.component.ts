import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { EditdialogboxComponent } from '../editdialogbox/editdialogbox.component';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private router:Router,private dialog:MatDialog) { }
  @Input() id:string;
  @Input() name:string;
  @Input() email:string;
  @Input() Edit:boolean;
  @Output() deleteEvent  = new EventEmitter<any>();
  IsEdit:boolean;
  ngOnInit() {
    this.IsEdit=this.Edit;
    this.oldid=this.id;
      this.oldname=this.name;
      this.oldemail=this.email;
  }
  oldid:string;
  oldname:string;
  oldemail:string;
  delete(event:any){
    // console.log("delete"+this.id);
    this.deleteEvent.emit(event);
    this.employeeService.DeleteEmployee(this.id).subscribe();
    this.router.navigateByUrl('card');
  }
  edit(){
      this.oldid=this.id;
      this.oldname=this.name;
      this.oldemail=this.email;
      this.IsEdit=false;
      this.employeeService.EditStatus(this.id,false).subscribe(
        data=>{
          this.deleteEvent.emit(event);
        }
      );
      
  }
  Close(){
    this.IsEdit=true;
    this.employeeService.EditStatus(this.id,true).subscribe(
      data=>{
        this.deleteEvent.emit(event);
      }
    );
    

  }
  Update(){
    console.log("hi from update");
    
    this.id=this.oldid;
    this.name=this.oldname;
    this.email=this.oldemail;
    
    this.employeeService.UpdateEmployee(this.name,this.email,this.id,true).subscribe(
      data=>{}
    );
    this.IsEdit=true;
    this.router.navigateByUrl('card');

  }
}
