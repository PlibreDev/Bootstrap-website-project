# Coding Temple, Paul Jaghab Jan 2025

## Project Description

This project is a responsive website for my personal marketing agency website. The website is designed to showcase the company's services, portfolio, and contact options while providing a user-friendly experience. I obviously had to make quite a few changes to be able to incorporate the requirements for the assignment. I struggled a bit with the layout of the cards at a medium viewport. Between approximately 800px and 1200px, the cards wouldn't stay in the center and I played around with it for a while. In the end I had to use AI to enhance my code in some areas, especially with the javascript, since I started out with quite a few errors. 

### Features

1. **Navigation Bar**:
   - A responsive navigation bar built with Bootstrap that allows users to navigate to different sections of the website, including Home, Pricing, and Contact Us.

2. **Hero Section**:
   - A visually appealing hero section with an image and a call-to-action button to engage users immediately.

3. **Services Section**:
   - A grid layout showcasing the company's three main services: Web Design, Search Engine Optimization, and Support Services. Each service is displayed with an image, title, and description.

4. **Service Comparison Table**:
   - A table that compares the features and starting prices of the services offered, providing users with a clear understanding of the options available.

5. **Portfolio Section**:
   - A Bootstrap carousel that highlights two portfolio items, showcasing the company's previous work. Each portfolio item includes an image, title, and a link to the respective website.

6. **Contact Form**:
   - A form where users can submit their name, contact information, and a message. This feature allows potential clients to reach out for inquiries.

7. **Chatbot Modal**:
   - A sticky chatbot button in the bottom-right corner of the screen that opens a modal. The chatbot is currently under development but provides a placeholder message and contact information.

### Technologies Used

- **HTML**: For the structure of the website.
- **CSS**: For styling, including custom styles for sections like the hero, services, and chatbot.
- **Bootstrap**: For responsive design and components like the navigation bar, carousel, and modal.
- **JavaScript**: For simulating interactive features (described below).

---

## JavaScript Functions

The `project.js` file contains JavaScript functions that simulate interactive features for the website. These functions are not yet connected to the website as dictated by the assignment guidelines.

### Functions

1. **chatbotResponse(userMessage)**:
   - Simulates a chatbot's response to a user's message.
   - Uses an array of predefined responses and selects one randomly to reply.

2. **calculatePricing(service, durationInMonths)**:
   - Calculates the total cost of a service based on its monthly price and the duration in months.
   - Outputs the total cost to the console.

3. **filterPortfolio(keyword)**:
   - Filters portfolio items based on a keyword.
   - Outputs the filtered portfolio items to the console.

4. **submitContactForm(name, email, message)**:
   - Simulates the submission of the contact form.
   - Outputs the submitted details to the console along with a thank-you message.

5. **compareServices(service1, service2)**:
   - Compares the features of two services.
   - Outputs the features of both services to the console for comparison.

### Purpose of JavaScript Functions

These functions simulate interactive features that could enhance the user experience on the website:
- The chatbot function could be integrated into the chatbot modal to provide real-time responses.
- The pricing calculator could be added to the pricing section to allow users to estimate costs dynamically.
- The portfolio filter could be used to let users search for specific projects.
- The contact form submission function could handle form data and send it to a backend server.
- The service comparison function could be used to create an interactive comparison tool for users.

---

## Future Enhancements

- Connect the JavaScript functions to the website for real-time interactivity.
- Add backend functionality to handle form submissions and chatbot responses.
- Expand the portfolio section with more items and filtering options.
- Implement a fully functional chatbot for customer support.
