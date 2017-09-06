// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import { Element as PolymerElement }
    from '../node_modules/@polymer/polymer/polymer-element.js';
import "../node_modules/@polymer/paper-button/paper-button.js";
import myAppTemplate from "./my-app-template.html";
// Added "export" to export the MyApp symbol from the module
export class MyApp extends PolymerElement {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return myAppTemplate;
    }

    constructor() {
        super();
        this.name = '3.0 preview';
    }

    // properties, observers, etc. are identical to 2.x
    static get properties() {
        name: {
            Type: String
        }
    }
}

customElements.define('my-app', MyApp);