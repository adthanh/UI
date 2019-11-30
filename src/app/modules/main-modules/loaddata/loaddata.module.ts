import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadDataRoutingModule } from './loaddata-routing.module';
import { LoaddataComponent } from './loaddata.component';
import { MatTableModule, MatInputModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatIconModule, MatDialogModule, MatRadioModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoaddataComponent],
  imports: [
    CommonModule,
    LoadDataRoutingModule,
    MatTableModule, 
    MatInputModule,
    MatPaginatorModule,
    MatSortModule, 
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
  ]
})
export class LoadDataModule { }
