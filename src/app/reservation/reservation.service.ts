import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

// Were able to inject the reservation service into the constructor
@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  private reservations: Reservation[] = [];

  // Before the life cycle hooks get loaded
  constructor(){
    let savedReservations = localStorage.getItem('reservations')
    // When ever we create an instance of reservations it will get it from local storage
    this.reservations = savedReservations? JSON.parse(savedReservations) : []
  }

  // CRUD

  getReservations(): Reservation[] {
    // Get reservation and return value of type array 
    return this.reservations;
  }

  // Get reservation by id a single reservation
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  // Push the reservation into array
  addReservation(reservation: Reservation): void {

    // unique identifier
    reservation.id = Date.now().toString();

    this.reservations.push(reservation);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  // Delete Reservation
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1)
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }


  // Update Reservation
  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === id);
    // Goes to that index postion and then we put our updated Reservation at that spot
    this.reservations[index] = updatedReservation;
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

}
