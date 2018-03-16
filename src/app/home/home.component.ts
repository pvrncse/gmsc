import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NodemodulesService } from '../nodemodules.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup:FormGroup;

  modules = new FormControl();
  moduleList = ['express', 'fs', 'body-parser', 'async', 'postgres-pure', 'mongo-connect'];

  constructor(private router: Router, private _formBuilder: FormBuilder, private servicedata: NodemodulesService) { }
  someDataFromService:string = '';
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      Servercode: ['NodeJS', Validators.required],
      Database: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      Nodemodules: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      Tablename: ['', Validators.required]
    });
  console.log(this.servicedata.testData);
  //console.log(this.servicedata.loadNodemodules());  
  this.someDataFromService = this.servicedata.loadSomeData();
  }
  
  logMeOut(){
    this.router.navigate(['login']);
  }
  loadModule(){
    this.servicedata.loadNodemodules('body-parser').subscribe((value) => {
      console.log(value);
    });
  }
  
}
