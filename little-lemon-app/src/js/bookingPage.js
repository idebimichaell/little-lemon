import React from 'react';
import BookingForm from './bookingForm';

function BookingPage() {
  return (
    <div className="booking-page">
      <section className="booking-intro">
        <h2>Reserve a Table</h2>
        <p>Proceed to reserve a table by filling out the form below.</p>
      </section>

      <BookingForm />

    </div>
  );
}

export default BookingPage;
