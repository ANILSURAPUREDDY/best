import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

import { MustMatch } from './_helper/must-match-validator';

import { SupermanService } from '../superman.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  registerForm:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder,private service:SupermanService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title:['',Validators.required],
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(4)]],
      confirmPassword:['',Validators.required],
      acceptTerms:[false,Validators.required]
    },{
      Validator:MustMatch('password','confirmPassword')
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit(){
    this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        var obj = {
          cmd:'createUser',
          params:this.registerForm.value
        }

        console.log("obj0",obj);

        this.service.postSerive(obj)
        .subscribe((result)=>{
          console.log("resulr",result);
        })

        // this.registerForm.value;
  }

}
