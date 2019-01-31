import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface Channels {
  value: string;
  viewValue: string;
}
export interface Content_type {
  value: string;
  viewValue: string;
}
export interface Confirmation_val {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-newreviewpage1',
  templateUrl: './newreviewpage1.component.html',
  styleUrls: ['./newreviewpage1.component.css']
})
export class Newreviewpage1Component implements OnInit {
  channels: Channels[] = [
    {value: 'MTV', viewValue: 'MTV'},
    {value: 'MTV Beats', viewValue: 'MTV Beats'},
    {value: 'Vh1', viewValue: 'Vh1'},
    {value: 'Voot', viewValue: 'Voot'},
    {value: 'Comedy Central', viewValue: 'Comedy Central'}
  ];

  content_types: Content_type[] = [
    {value: 'Episodes', viewValue: 'Episodes'},
    {value: 'Songs', viewValue: 'Songs'},
    {value: 'Fillers', viewValue: 'Fillers'},
    {value: 'Commercials', viewValue: 'Commercials'},
    {value: 'CAC content for Voot', viewValue: 'CAC content for Voot'}
  ];
  confirmation_val: Confirmation_val[] = [                      
    {value: 'Ok', viewValue: 'Ok'},
    {value: 'Accepted', viewValue: 'Accepted'},
    {value: 'Rejected', viewValue: 'Rejected'},
  ]
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstCtrl1: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }

}