import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-query-pg',
  templateUrl: './query-pg.component.html',
  styleUrls: ['./query-pg.component.css']
})
export class QueryPgComponent implements OnInit{
  enquiryForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  submitted: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';


  ngOnInit(): void {
    this.enquiryForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(200)]]
    });
  }

  submitEnquiry() {
    console.log('sub')
    this.submitted = true;

    if (this.enquiryForm.valid) {
      
      this.successMessage = 'Enquiry submitted successfully.';
      console.log(this.enquiryForm.value);
      this.enquiryForm.reset();
      
      this.submitted = false;
    } else {
      console.log(this.submitted)
      this.errorMessage = 'Please fill all the mandatory fields and ensure message is less than 200 characters.';
      setTimeout(()=>{
        this.errorMessage=''
        },3000)
      }
  }
}
