# Event Booking and Payment Integration Demo

This is a demo web application built using **Next.js**, **React**, and **Stripe** to showcase event booking and payment processing functionality. The application allows users to view events, reserve tickets, and make demo payments through Stripe's test environment.

## Features
- **Event Listing**: Displays a list of upcoming events with details such as event name, date, time, location, and price.
- **Event Details**: When an event is clicked, users can view detailed information about the event, including availability and description.
- **Payment Integration**: Users can simulate a payment process using Stripe's test environment (with test credit card details).
- **Demo Payment**: This is a demo version where actual payment isn't processed. Instead, a success message is shown after the payment token is generated.

## Technologies Used
- **Next.js**: A React framework for building server-rendered React applications.
- **Stripe**: A payment gateway used for processing payments. This demo uses Stripe's test environment for payment simulations.
- **Tailwind CSS**: For responsive and modern UI styling.

## Setup Instructions

Follow these steps to set up the project locally:

### Prerequisites
- **Node.js** (version 14.x or later)
- **npm** or **yarn** (for package management)

### Steps to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/event-booking-stripe-demo.git
   cd event-booking-stripe-demo

