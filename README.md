# Booking-WebApp-Demo
This Angular web application is designed to showcase travel destinations and allow users to search for a specific city. The application includes a minimum of one module in addition to the app module and a minimum of three components.

The application uses routing to navigate between modules and components, with lazy-loading implemented for improved performance. The manipulation of data from city cards (which include a picture, name, brief description and a button) is done through a service, which allows for easy management of the data.

The application makes use of decorators such as @Input(), @Output(), and [(ngModel)]. The @Input() decorator is used to pass data from the parent component to the child component, while @Output() is used to emit an event from the child component to the parent component. [(ngModel)] is used for two-way data binding, allowing users to input and retrieve data from the search component.

The *ngFor directive is used to display the city cards in a loop, with each card dynamically populated with data from the city data service. By clicking the 'Visit Now' button in a card, the name of the selected city appears in the header instead of the title 'New Adventure' using the @Output() decorator.

The application is structured with clean code, following Angular best practices, and does not make use of any UI library.
