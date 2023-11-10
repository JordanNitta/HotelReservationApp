import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Importing our reservation injection from the serice
import { ReservationService } from '../reservation/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{

  
  reservationForm: FormGroup = new FormGroup({});

  // Create an instance and the constructor will get invoked
  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService){

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      // Makes sure all input fields are valid
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      // Does regex expresions if you want to create multiple you need to create an array in that one
      guestEmail: ['', [Validators.required], Validators.email],
      roomNumber: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log('hi')
    if(this.reservationForm.valid){
      this,this.reservationService.addReservation()

    }
  }

}
