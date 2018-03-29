import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router'
import { MatStepper } from '@angular/material';
import { FormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NodemodulesService } from '../nodemodules.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLinear = false;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  // thirdFormGroup: FormGroup;
  // fourthFormGroup:FormGroup;
  search:string='';
  @ViewChild('stepper') stepper;
  listOfNodeModules:object=[];
  Obj:object={};

  constructor(private router: Router, private _formBuilder: FormBuilder, private servicedata: NodemodulesService) { }
  someDataFromService:string = '';
  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   Servercode: ['NodeJS', Validators.required],
    //   Database: ['', Validators.required]
    // });
    // this.thirdFormGroup = this._formBuilder.group({
    //   modules: ['', Validators.required],
    //   addedModules: ['', Validators.required]
    // });
    // this.fourthFormGroup = this._formBuilder.group({
    //   Tablename: ['', Validators.required]
    // });
  console.log(this.servicedata.testData);
  //console.log(this.servicedata.loadNodemodules());  
  this.someDataFromService = this.servicedata.loadSomeData();
  }
  
  logMeOut(){
    this.router.navigate(['login']);
  }
  loadModule(){
    if(this.search.length>0){
      this.servicedata.loadNodemodules(this.search).subscribe((value) => {
        console.log(value);
        this.listOfNodeModules = value.sections.packages;
      });
    }
  }
  clickItToUpdate(data:string){
    console.log(data);
  }
  getAllInfoInJson(){
    console.log(this.Obj);
    this.stepper.reset();
  }
  goBack(stepper: MatStepper){
    stepper.previous();
  }

  goForward(stepper: MatStepper, which:number){
    console.log(which);
    // if(which==1){
    //   if(this.Obj.projectName){
    //     stepper.next();
    //   }
    // }
    // if(which==2){
    //   if(this.Obj.serverSide && this.Obj.dataBase){
    //     stepper.next();
    //   }
    // }
    // if(which==3){
    //   if(this.Obj.addedModules){
    //     stepper.next();
    //   }
    // }
    
  }
}
