# AppWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

Para el proyecto, basta con clonarlo, un npm install y correrlo con npm start
Para ejecutar pruebas unitarias ng test


##Weather API

Se crearon dos servicios, uno para las apis de weather api, se utilizaron dos servicios, uno para obtener las sugerencias de ciudades
y otro para el detalle por ciudad.
Se creó servicio de favorites para la gestion del localStorage al almacenar los favoritos
Para optimizaciones se hace uso de caching, almacenando las búsquedas ya realizadas y evitando volver a hacer la petición
Se realizó implementación de internacionalizacion, puede ponerse en inglés o español la app
Se hizo uso de Tailwind para los estilos
Se utilizaron diferentes módulos, para histórico, clima, favoritos. Para el tema de routing se implementó lazyLoading
Las pruebas unitarias fueron realizadas con Karma y Jasmine
Se hizo uso de algunos operadores RxJs para el manejo de los datos asíncronos

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
