// Element is the same as Polymer.Element in 2.x
// Modules give you the freedom to rename the members that you import
import { Element as PolymerElement }
    from '../node_modules/@polymer/polymer/polymer-element.js';
import "../node_modules/@polymer/paper-button/paper-button.js";
import "./html-console.js";
// Added "export" to export the MyApp symbol from the module
export class MyApp extends PolymerElement {

    // Define a string template instead of a `<template>` element.
    static get template() {
        return `<div>
                    <paper-button on-click="setName">Set name</paper-button>
                    <html-console first="[[name]]" last="[[surname]]"></html-console>
                </div>`
    }

    constructor() {
        super();
    }

    // properties, observers, etc. are identical to 2.x
    static get properties() {
        return {
            name: String,
            surname: String
        }
    }

    setName() {
        this.name = "Jon";
        this.surname = "Snow"
    }
}

customElements.define('my-app', MyApp);