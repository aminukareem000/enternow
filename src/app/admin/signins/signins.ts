import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Admin } from '../../services/admin';
import { IStaff } from '../../interfaces/staff';
import { FormGroup } from '@angular/forms';

export interface StaffDetails {
  sn: number;
  name: string;
  department: string;
  signin: string;
  staffId: string;
}

const ELEMENT_DATA: StaffDetails[] = [
  {sn: 1, name: 'Olu', department: 'A', signin: '7:45', staffId: '010'},
  {sn: 4, name: 'Ade', department: 'A', signin: '7:50', staffId: '015'},
  {sn: 2, name: 'Ada', department: 'B', signin: '7:55', staffId: '005'},
  {sn: 3, name: 'Kola', department: 'B', signin: '6:10', staffId: '020'},
  {sn: 5, name: 'ola', department: 'B', signin: '8:00', staffId: '025'}
];

@Component({
  selector: 'table-basic-example',
  styleUrls: ['./signins.css'],
  templateUrl: './signins.html',
  standalone: false,
})
export class Signins implements OnInit {

  onCreateSignin(arg0: any) {
    throw new Error('Method not implemented.');
  }

  dataSource!: IStaff[];
  signInForm!: FormGroup;

  constructor(private adminService: Admin) {}

  displayedColumns: string[] = ['sn', 'name', 'department', 'signin', 'staffId'];

  ngOnInit(): void {
    this.onGetSignIns();
  }

  onGetSignIns() {
    this.adminService.getStaff().subscribe((res) => {
      this.dataSource = res;
    });
  }
}
