import { Component, OnInit} from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService){ }

  ngOnInit(): void {
    // We use our ReservationService by calling the asynchronous function getReservations
    // We subscribe to the observable returned by getReservations
    // The callback function inside subscribe is executed when data is received
    this.reservationService.getReservations().subscribe( reservations => {
      // Assign the received reservations to the component's reservations property
      console.log('Received reservations:', reservations);
      this.reservations = reservations;
    });
  }

  // The service is also deleting the res by string
  deleteReservation(id: string){
    this.reservationService.deleteReservation(id)
  }
}
