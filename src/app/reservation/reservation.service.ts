import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

// Were able to inject the reservation service into the constructor
@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  private reservation: Reservation[] = [];

  // CRUD

  getReservations(): Reservation[] {
    // Get reservation and return value of type array 
    return this.reservation;
  }

  // Get reservation by id a single reservation
  getReservation(id: string): Reservation | undefined{
    return this.reservation.find(res => res.id === id);
  }

  // Push the reservation into array
  addReservation(reservation: Reservation): void {
    this.reservation.push(reservation)
  }

  // Delete Reservation
  deleteReservation(id: string): void {
    let index = this.reservation.findIndex(res => res.id === id);
    // splice at index and then remove one of them
    this.reservation.splice(index, 1);
  }

  // Update Reservation
  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservation.findIndex(res => res.id === updatedReservation.id);
    // Goes to that index postion and then we put our updated Reservation at that spot
    this.reservation[index] = updatedReservation;;
  }
  
}
