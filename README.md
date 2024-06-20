# HC Demo

This project is a React application that displays user cards with details fetched from an API. Users can view more details about each user in a modal. The application includes unit and integration tests using Jest and Cypress.

## Table of Contents

- [Installation](#installation)
- [Running the App](#running-the-app)
- [Unit Tests](#unit-tests)
- [Integration Tests](#integration-tests)
- [Technologies Used](#technologies-used)

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/Amir-61/hc-demo
cd hc-demo
npm install
```

## Running the App

To run the application locally, use the following command:
```
npm start
```

This will start the development server and you can view the app by navigating to http://localhost:3000 in your browser.


## Unit Tests

Unit tests are written using Jest and React Testing Library. The tests are located in the src/__tests__ directory.

To run the unit tests, use the following command:

```bash
    npm test
```

## Integration Tests

Integration tests are written using Cypress. The tests are located in the cypress/e2e directory.

To run the Cypress tests, use the following commands:

	1.	Open Cypress Test Runner:

```bash
    npx cypress open
```

	2.	Run Cypress tests in headless mode:

```bash
    npx cypress run
```

## Technologies Used

	•	React: A JavaScript library for building user interfaces.
	•	TypeScript: A superset of JavaScript that adds static types.
	•	Material-UI: React components for faster and easier web development.
	•	Axios: Promise-based HTTP client for the browser and node.js.
	•	Jest: JavaScript testing framework.
	•	React Testing Library: A library for testing React components.
	•	Cypress: JavaScript end-to-end testing framework.

Feel free to explore the code, run tests, and make improvements. Contributions are welcome!