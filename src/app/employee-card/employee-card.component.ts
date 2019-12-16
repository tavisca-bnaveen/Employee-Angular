import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private router:Router) { }
  @Input() id:string;
  @Input() name:string;
  @Input() email:string;
  @Output() deleteEvent  = new EventEmitter<any>();
  ngOnInit() {
  }
  
  delete(event:any){
    console.log("delete"+this.id);
    this.deleteEvent.emit(event);
    this.employeeService.DeleteEmployee(this.id).subscribe();
    this.router.navigateByUrl('card');
  }
}
