# **Cinemark Web End-to-End Automation**

The design pattern used for the project is POM. The tests are located in the *e2e* folder, the data for running the tests is in the *fixtures* folder, and all the page classes are in the *page* folder. Inside this folder, there is a class called *ElementActions.js* which handles all the user actions on the web page.

### Install Cypress as a dependency in the cloned repository

`npm install cypress --save-dev`

### Command to run the test in headless mode

`npx cypress run`

### Command to open the Cypress interface and run tests with step-by-step visualization

`npx cypress open`