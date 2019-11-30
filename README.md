# AdminTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run `ng g module [module-name] --routing` to generate new module with route.
    `ng g c component-name --spec false` to generate new module without spec.
    `ng g c component-name --flat false` to generate new c same forder.
    `ng build --configuration=production` build production 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Coding Covenstion


* **Shouldn't :** 
<!-- sự kiện change (người dùng thay đổi giá trị) sẽ được bind với hàm updateValue() -->
 Html: `<input type="text" (change)="updateValue($event)">`
 Js: `updateValue(event: Event){`   
    `this.label = event.target.value;`
  `}`

*   **Should:** 
  Html: `<input type="text" #label1 (change)="updateValue(label1.value)">`
  Js: updateValue(value: any){
         `this.label = value;`
     `}`
