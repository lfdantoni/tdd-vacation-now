# STEPS
- app-title
- add-searcher
  - Add ng-mocks library
- searcher-tests
  - Add input
  - Add button
  - Add check result
    - Input value
    - Spy click
    - Search method - set a fixed result en hotels property
    - Check results
- searcher-service-tests
  - create new service
    - add a search method with a mock
    - add a TODO to the search test
  - add new service to the searcher tests
  - add service to the component (onSearch and putting hotels as observable)
    - it will return a false-positive
    - change the component template
- service-tests
  - add search test


# VacationNow

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
