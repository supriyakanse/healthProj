import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-place-appointment-pg',
  templateUrl: './place-appointment-pg.component.html',
  styleUrls: ['./place-appointment-pg.component.css']
})
export class PlaceAppointmentPgComponent implements OnInit {
 
  appointmentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  
    this.appointmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      mobileNo: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', Validators.required],
      trainerPreference: ['', Validators.required],
      needPhysiotherapist: ['', Validators.required],
      package: ['', Validators.required],
      weeks: ['', Validators.required],
      amount: [{ value: '', disabled: true }, Validators.required]
    });

    // Subscribe to changes in package and needPhysiotherapist fields to recalculate the amount
    this.appointmentForm.get('package')?.valueChanges.subscribe(() => {
      this.calculateAmount();
    });
    this.appointmentForm.get('needPhysiotherapist')?.valueChanges.subscribe(() => {
      this.calculateAmount();
    });
  }
  isWeeksDisabled(): boolean {
    const selectedPackage = this.appointmentForm.get('package')?.value;
    return !(selectedPackage === '400' || selectedPackage === '300');
}
isWeeksVisible(): boolean {
  const selectedPackage = this.appointmentForm.get('package')?.value;
  return selectedPackage === '400' || selectedPackage === '300';
}

  calculateAmount() {
    let baseAmount = 0;

    // Calculate base amount based on selected package
    const selectedPackage = this.appointmentForm.get('package')?.value;
    if (selectedPackage) {
      baseAmount = parseInt(selectedPackage);
    }

    // Add 200 if physiotherapist is required
    const needPhysiotherapist = this.appointmentForm.get('needPhysiotherapist')?.value;
    if (needPhysiotherapist === 'yes') {
      baseAmount += 200;
    }

    // Set calculated amount to the form control
    this.appointmentForm.get('amount')?.setValue(baseAmount);
  }

 
  onSubmit() {
    if (this.appointmentForm.valid) {
      // You can perform further actions here like sending the form data to backend
      console.log(this.appointmentForm.value);
    } else {
      alert("Please fill in all required fields.");
    }
  }
}
