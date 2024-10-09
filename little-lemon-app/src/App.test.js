import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from "./js/bookingForm";


describe('Booking Form', () => {
  test('submit form correctly', () => {
    render(<BookingForm />);

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);
  });
})
  
