import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Importing our reservation injection from the serice
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

import { Router, ActivatedRoute } from '@angular/router';

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
    private reservationService: ReservationService,
    // Need to create in constructor to reroute user in onsubmit
    private router: Router,
    private activatedRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      // Define the 'checkInDate' form control with an initial empty value and a required validator
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      // Does regex expresions if you want to create multiple you need to create an array in that one
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    })

    // Get the 'id' parameter from the current route's snapshot using the ActivatedRoute service
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    // Check if 'id' has a value (i.e., if the 'id' parameter is present in the route)
    if(id) {
       // If 'id' exists, call the getReservation method of the reservationService to retrieve reservation details
      // Note: It assumes that reservationService.getReservation(id) returns details of a reservation based on the provided 'id'
      let reservation = this.reservationService.getReservation(id);
      // This makes the value populate with the data from the ID
      if(reservation){
        this.reservationForm.patchValue(reservation)
      }
    }
  // The 'activatedRoute' is a service provided by Angular to access information about the current route
  // It provides access to route-related information such as route parameters, data, and the route snapshot
  // In this case, it's used to extract the 'id' parameter from the current route's snapshot
  // The 'snapshot' refers to the state of the route at the specific moment when this code is executed
  }
  

  onSubmit() {
    console.log('hi')
      // Check if the form is valid
    if(this.reservationForm.valid){
      console.log('form invalid')
      // Get the form values and create a Reservation object
      let reservation: Reservation = this.reservationForm.value;
      // Call the addReservation method in the ReservationService to add the reservation
      this.reservationService.addReservation(reservation);

      // Route the user to another page after submiting
      this.router.navigate(['/list'])
    }
  }

}
