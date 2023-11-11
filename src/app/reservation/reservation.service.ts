import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
// This is what we use to send HTTP request
import { HttpClient } from '@angular/common/http';
// 
import { Observable } from 'rxjs';

// Were able to inject the reservation service into the constructor
@Injectable({
  providedIn: 'root'
})

export class ReservationService {

  // Specify Api Url
  private apiUrl = "http://localhost:3000";

  private reservations: Reservation[] = [];
  // Before the life cycle hooks get loaded

  constructor(private http: HttpClient){ }
  // CRUD
  

  // The Observable is a async way we can wait for a result
  getReservations(): Observable<Reservation[]> {
    // Get reservation and return value of type array 
    // We are creating an observable and we are sending it out and waiting for a response which allows them to subscribe to it or listen to it
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
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
  }

  // Delete Reservation
  deleteReservation(id: string): void {
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index,1)
  }


  // Update Reservation
  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === id);
    // Goes to that index postion and then we put our updated Reservation at that spot
    this.reservations[index] = updatedReservation;
  }

}
