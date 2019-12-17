import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { EditdialogboxComponent } from './editdialogbox/editdialogbox.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { VERSION, MatDialogRef, MatDialog,MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import {ConfirmationDialog} from './confirmation-dialog.component';
// import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeCardComponent,
    EditdialogboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditdialogboxComponent]
})
export class AppModule { }
